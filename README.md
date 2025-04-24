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
