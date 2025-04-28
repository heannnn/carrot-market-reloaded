# Carrot Market Reloaded

# TailWwind CSS JIT(Just In Time Complier)

지금까지 공부한 것으로 보면 tailwind는 단지 class name으로 가득찬 파일같다.
하지만 tailwind는 파일이 아니다. 실제로 compiler다.
파일을 저장할때마다 classname을 추출하고 추출해낸 것들을 실제로 CSS코드로 변환한다.

- Compiler가 class name을 읽어들여서 class name들로부터 추출해낸 css code를 생성해낸 것.
  -> 따라서 className="h-[345.178px]" 을 입력하면 complier가 {height:345.178px} 를 생성한다.

- Compliler 덕분에 compiler는 자체 class 뿐만 아니라 입력한 arbitrary value를 기반으로도 class를 생성해주므로 커스터마이징이 굉장히 편리함
  -> tailwind.config.ts > theme > extend에 커스텀 class를 정의할 수 있음

- directives(지시문)
  @tailwind 지시문을 사용하여 Tailwind의 base, components, utilities 및 variants 스타일을 CSS에 삽입할 수 있다.
  -> @tailwind utilities
  utilities directive안에 컴파일러는 모든 utility class name들을 넣을 것이다. ex.bg-white
  -> @tailwind base
  tailwind가 생성하는 기본값 base styles을 포함한다.
  -> @tailwind components

  @apply 지시문을 사용하여 기존 유틸리티 클래스를 커스텀 CSS에 인라인 할 수 있다.

  @layer 지시문은 layer를 각각 확장할 수 있게 한다.

- tailwind play로 tailwind 공부하기
  https://play.tailwindcss.com/ASbiScbZRJ

# Route Handlers

Route Handlers를 사용하면 웹 요청 및 응답 API를 사용하여 특정 경로에 대한 사용자 커스텀 요청 핸들러를 생성할 수 있다.
Route Handlers는 app 디렉터리 내에서만 사용할 수 있고, 파일명 route.ts 가 중요하다=> NextJS가 Route Handler를 만든다는 것을 알 수 있음

# useFormStatus

useFormStatus는 마지막 form submit의 상태 정보를 제공하는 hook

# zod

유효성 검사 라이브러리
사용자가 Server action으로 보내는 데이터의 유효성 검사에 도움을 준다.

[Object Schema]
z.object() 로 오브젝트 스키마를 만들 수 있음음
예시: const User = z.object( { username: z.string() } );

[.parse]
data의 타입이 유효한지 검사하기 위해 .parse 메소드를 사용할 수 있습니다. 유효한 경우 데이터 전체 정보가 포함된 값이 반환. 유효하지 않은 경우, 에러 발생. 보통 try-catch 문으로 감싸서 사용

[.safeParse]
.parse를 사용할 때 타입이 유효하지 않은 경우 Zod가 에러를 발생시키는 것을 원하지 않는다면, .safeParse를 사용

데이터가 유효한 경우 true값의 success와 데이터 정보가 담긴 data를 반환
유효하지 않은 경우에는 false값의 success와 에러 정보가 담긴 error를 반환

예시 : stringSchema.safeParse(12); // => { success: false; error: ZodError }

# validator

JavaScript의 validator 모듈은 문자열 검증 및 살균(sanitization)을 위한 라이브러리
다양한 유형의 문자열 입력을 검증하거나 살균하는 데 사용할 수 있는 여러 함수를 제공
npm i validator
npm i @types/validator

# Coerce

Zod는 coerce를 이용하여 값의 타입을 강제할 수 있음
z.coerce.string(); // String(input)
z.coerce.number(); // Number(input)
z.coerce.boolean(); // Boolean(input)
z.coerce.bigint(); // BigInt(input)
z.coerce.date(); // new Date(input)

# Prisma - .env 파일에 DB정보가 있음(gitignore포함)

차세대 Node.js 및 TypeScript ORM
npm i prisma
npx prisma init
npx prisma migrate dev

[Referential Actions]
Referential actions는 관련된 레코드가 삭제되거나 업데이트될 때 어떤 일이 발생하는지를 결정합니다. Prisma는 아래의 referential actions 종류를 지원합니다.

(onDelete 기준으로 설명합니다.)
Cascade: 참조 레코드를 삭제하면 참조 레코드의 삭제가 트리거됩니다.
Restrict: 참조 레코드가 있는 경우 삭제를 방지합니다.
NoAction: Restrict과 유사하지만 사용 중인 데이터베이스에 따라 다릅니다.
SetNull: 참조 필드가 NULL로 설정됩니다. (optional일 때만 정상 작동)
SetDefault: 참조 필드가 기본값으로 설정됩니다.

[ Prisma Client ]
Prisma Client는 데이터에 맞춰 자동 생성되는 type-safe 쿼리 빌더입니다.
데이터베이스와 상호작용할 때 SQL 대신 직관적인 API를 제공해줍니다. 데이터를 쉽게 조회, 삽입, 업데이트, 삭제할 수 있으며, 자동 타입 안전성과 코드 자동 완성 기능을 제공합니다.

[ Prisma Studio ]
npx prisma studio
