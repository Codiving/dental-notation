# Dental Notation 프로젝트 정리

## 프로젝트 목적

FDI, Universal, Palmer 치식 간의 변환과 치식 화면 표시를 지원하는 TypeScript 라이브러리입니다.

지원 대상은 다음과 같습니다.

- 영구치
- 유치
- FDI notation
- Universal notation
- Palmer notation
- notation 간 변환
- 치식 문자열 포맷팅
- 치식 화면용 슬롯 생성

## 현재 버전

현재 package 버전은 `1.0.0`입니다.

`1.0.0`부터는 breaking change를 허용하며, 기존의 모호한 명칭은 public API에서 제거했습니다.

## 명칭 규칙

### 영구치

기존의 `Primary` 대신 `Permanent`를 사용합니다.

```ts
FdiPermanentTeeth
UniversalPermanentTeeth
PalmerPermanentTeeth
```

### 유치

기존의 `Baby` 대신 `Deciduous`를 사용합니다.

```ts
FdiDeciduousTeeth
UniversalDeciduousTeeth
PalmerDeciduousTeeth
```

### 화면용 가상 위치

실제 치아가 존재하지 않는 유치의 추가 위치는 `Placeholder`로 표현합니다.

```ts
FDI_TEETH_WITH_PLACEHOLDER
FdiTeethWithPlaceholder
convertTeethWithPlaceholder
```

`TMP`, `NonExist`, `Baby`, `Primary`는 public API뿐 아니라 내부 코드에서도 사용하지 않습니다.

## 유치와 placeholder

유치는 각 사분면에 실제 치아가 5개씩만 존재합니다.

```text
실제 유치: 5개 × 4사분면 = 20개
화면 placeholder: 3개 × 4사분면 = 12개
전체 화면 슬롯: 8개 × 4사분면 = 32개
```

예를 들어 FDI 상악 우측 유치는 다음과 같습니다. (사분면별 배열은 내부 전용입니다.)

```text
실제 유치:          [55, 54, 53, 52, 51]
placeholder 포함:   [58, 57, 56, 55, 54, 53, 52, 51]
```

placeholder 값은 실제 임상 치아가 아니라 화면의 위치를 맞추기 위한 값입니다.

## Public API

`src/index.ts`에서 명시적으로 export하는 것만 공개합니다. 목록은 `publicApi.test.ts`로 고정되어 있어, export가 바뀌면 테스트가 실패합니다.

| 구분 | 이름 |
|---|---|
| 함수 | `convertTeeth`, `convertTeethWithPlaceholder`, `switchDentition`, `formatTeeth`, `isFdiTooth`, `isUniversalTooth`, `isPalmerTooth`, `getToothSlots` |
| 상수 | notation별 `*_TEETH`, `*_PERMANENT_TEETH`, `*_DECIDUOUS_TEETH`, `*_TEETH_WITH_PLACEHOLDER` (`FDI`, `UNIVERSAL`, `PALMER`) |
| 타입 | 위 상수의 타입(`FdiTeeth`, `FdiPermanentTeeth` 등), `NotationType`, `Teeth`, `TeethWithPlaceholder`, `Dentition`, `ToothQuadrant`, `ToothSlot` |

사분면별 상수와 타입, notation 간 매핑 테이블은 내부 전용입니다. 치식도처럼 사분면 배치가 필요한 경우에는 `getToothSlots`를 사용합니다.

## 주요 API

### 치식 변환

```ts
convertTeeth(teeth, "universal");
```

영구치와 실제 유치를 FDI, Universal, Palmer 사이에서 변환합니다.

변환 결과는 대상 notation에 맞는 타입으로 추론됩니다.

```ts
const universal: UniversalTeeth[] = convertTeeth(fdi, "universal");
const palmer: PalmerTeeth[] = convertTeeth(universal, "palmer");
```

알 수 없는 값, placeholder, 서로 다른 notation이 섞인 입력은 다음 에러를 던집니다. `convertTeethWithPlaceholder`와 `switchDentition`도 같은 메시지를 씁니다.

```text
Invalid mixed or unknown tooth notation: <값>
```

대상 notation이 `"fdi"`, `"universal"`, `"palmer"`가 아니면 입력과 관계없이 다음 에러를 던집니다.

```text
Unknown target notation: <값>
```

`convertTeeth`와 `convertTeethWithPlaceholder`는 같은 내부 함수(`utils/convertNotation.ts`)와 매핑 테이블을 사용하며, 허용하는 값의 범위만 다릅니다.

### placeholder 포함 치식 변환

```ts
convertTeethWithPlaceholder(teeth, "universal");
```

실제 치아와 화면용 placeholder를 함께 변환합니다.

### 영구치와 유치 전환

```ts
switchDentition([18]);
// [58]
```

notation별 입력도 지원합니다.

```ts
switchDentition(["1"]);
// ["A2"]

switchDentition(["8UR"]);
// ["HUR"]
```

### 치식 포맷팅

```ts
formatTeeth([18, 17, 15]);
// "#18-17, #15"

formatTeeth([18, 17, 15], "individual");
// "#18, #17, #15"
```

### 치아 검증

```ts
isFdiTooth(18);
isUniversalTooth("1");
isPalmerTooth("8UR");
```

이 함수들은 실제 치아 여부를 확인합니다. placeholder는 실제 치아가 아니므로 `false`가 될 수 있습니다.

### 화면 슬롯 생성

```ts
const slots = getToothSlots("fdi", "deciduous");
```

notation을 리터럴로 넘기면 notation별 `ToothSlot` 타입으로 추론됩니다. 치식도의 상태값처럼 `NotationType` 변수를 넘겨도 호출할 수 있습니다.

반환값은 화면 순서(상악 우측 → 상악 좌측 → 하악 우측 → 하악 좌측)의 32개 슬롯이며, 실제 치아와 placeholder가 타입으로 구분됩니다.

영구치와 유치는 같은 `quadrant`와 `slot`이 같은 화면 위치입니다. 따라서 치식도에서 dentition을 바꿔도 레이아웃은 그대로이고 값만 바뀝니다.

```ts
{
  quadrant: "upper-right",
  slot: 1,
  kind: "placeholder",
  tooth: null,
  placeholder: 58
}
```

실제 치아 슬롯은 다음과 같습니다.

```ts
{
  quadrant: "upper-right",
  slot: 4,
  kind: "tooth",
  tooth: 55
}
```

## 테스트 현황

현재 전체 테스트는 54개입니다.

검증 범위:

- 영구치 32개 전체 변환
- 유치 20개 전체 변환
- placeholder 포함 32개 전체 변환
- FDI ↔ Universal ↔ Palmer round-trip
- 슬롯 생성
- notation별 타입 추론
- 잘못된 입력 예외 처리 (알 수 없는 값, placeholder, 섞인 notation, 알 수 없는 대상 notation)
- 영구치/유치 슬롯 위치 정렬과 `switchDentition` 일치
- public API export 목록

검증 명령:

```bash
npm test -- --runInBand
npx tsc --noEmit
npm run build
npm run format:check
```

현재 테스트, TypeScript 검사, 패키지 빌드, 포맷 검사가 모두 통과합니다.

코드 포맷은 `.prettierrc`(prettier 3.3.3, `trailingComma: none`, `arrowParens: avoid`)를 따르며 `npm run format`으로 적용합니다.

## 디렉터리 역할

```text
src/
├── fdi.ts                  # FDI 치아 데이터와 타입
├── universal.ts            # Universal 치아 데이터와 타입
├── palmer.ts               # Palmer 치아 데이터와 타입
├── types.ts                # NotationType, Teeth 등 공통 타입
├── slots.ts                # 화면 표시용 ToothSlot 모델
├── index.ts                # public API 진입점 (명시적 export)
└── utils/
    ├── convertNotation.ts               # 매핑 테이블 기반 공통 변환 (내부)
    ├── convertTeeth.ts
    ├── convertTeethWithPlaceholder.ts
    ├── switchDentition.ts
    ├── formatTeeth.ts
    ├── fdi.ts / universal.ts / palmer.ts  # notation별 매핑 테이블, 포맷, 검증 (내부)
    └── common.ts                        # 포맷 공통 헬퍼 (내부)
```

## 주의할 점

- placeholder는 실제 치아가 아닙니다.
- 유치와 영구치의 사분면 방향 및 배열 순서를 유지해야 합니다.
- 새 public API에서는 `Permanent`, `Deciduous`, `Placeholder` 용어를 사용합니다.
- `1.0.0`부터 기존 `Primary`, `Baby`, `Tmp`, `NonExist` 이름은 지원하지 않습니다.
- 새 export를 추가할 때는 `publicApi.test.ts`의 목록도 함께 갱신해야 합니다.
