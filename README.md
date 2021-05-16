# Github Viewer

![Github](github.png)

Github의 인기 저장소 목록을 확인할 수 있고, Github 사용자 간의 프로필을 대결 구도로 비교해 볼 수 있는 웹 어플리케이션입니다.

## Installation

```sh
npm install
npm start
# Visit localhost:8080
```

## Warning

🚨 Github API 요청이 많아지면 제한될 수 있습니다. 그럴 경우, `/utils/api`를 참고하여 Mock Data로 대체하여 사용하세요.

## Keep in mind

이번 과제에서는 아래 사안들에 대해 깊게 고민하며 작업하세요.

1. State와 Props의 차이 및 용도 이해
2. Props 네이밍에 대한 고민
3. `useEffect`의 사용법 및 Dependency 이해

## Helpful readings

- [Thinking in React](https://ko.reactjs.org/docs/thinking-in-react.html)
- [Fragments](https://ko.reactjs.org/docs/fragments.html)
- [PropTypes](https://ko.reactjs.org/docs/typechecking-with-proptypes.html)

## TODO

인기 저장소 목록을 확인할 수 있는 기능은 이미 구현되어 있습니다. 여러분의 임무는 Github 사용자 간의 대결 기능을 만드는 것입니다. 다음과 같은 기능이 가능하도록 구현해주세요.

- [ ] 페이지 우측 상단의 Github 대결 버튼을 눌렀을 경우, 정확히 2개의 Github 사용자 이름을 입력할 수 있는 칸이 보여야 합니다.
- [ ] 2개의 사용자 이름을 입력하지 않은 경우, 대결을 진행할 수 있는 버튼이 보이지 않거나 비활성화 되어야 합니다.
- [ ] 2개의 사용자 이름을 입력한 경우에만 대결을 진행할 수 있는 버튼이 보여지거나 활성화 되어야 합니다.
- [ ] 대결을 진행하는 버튼을 눌렀을 경우, 입력받은 2명의 Github 사용자 프로필을 비교하여 승자를 판별해야 합니다.
- [ ] 승자 결과를 기다리는 동안에는 Loading 컴포넌트가 화면에 보여져야 합니다.
- [ ] 승자 판별 방식은 `utils/api`를 참고하세요.
- [ ] 승자 판별에 대한 결과가 완료된 후에는 화면에 각 사용자에 대해 아래와 같은 상세 정보를 보여주어야 합니다.
  - 승패 여부
  - 프로필 사진
  - 점수
  - Github Username
  - 이름
  - 지역
  - Followers Count
  - Following Count
  - Repository Count
- [ ] Popular -> Battle & Battle 진행 -> Popular -> Battle 순으로 진행한다면, 바로 이전에 진행했던 대결 결과가 여전히 보여져야 합니다.
- [ ] 클래스 기반 컴포넌트로 작업되어 있는 `<Loading />` 컴포넌트를 함수형 컴포넌트로 수정하세요.
- [ ] `utils/api.js`에는 현재 리팩터링 작업이 진행 중입니다. 마무리 되지 않은 리팩터링 작업을 끝내주세요.
  1. `getProfile` 함수와 `getRepos` 함수를 Async/Await 기반으로 리팩터링 하기
  2. `request` 함수를 [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)로 대체하기 (Async/Await 기반으로 유지해야 합니다.)

### Advanced

- [ ] `<Loading />` 컴포넌트에 대한 Unit Test를 보강하세요. (`/spec/Loading.spec.js`)
  - [Testing React Apps](https://create-react-app.dev/docs/running-tests/)
- [ ] `npm test` 명령어를 이용하여 Test Coverage를 확인할 수 있습니다. 단순한 컴포넌트 1-2개를 선택하여 테스트를 작성해보고 Test Coverage를 높여보세요.
- [ ] [Netlify](https://netlify.com/)를 이용하여 배포하기 ([create react app 참고](https://create-react-app.dev/docs/deployment/#netlify))

## After

1. 리액트 컴포넌트에서 말하는 Side Effect란 무엇인가?
2. Virtual DOM에 대한 이해 및 [Diffing Algorithm](https://ko.reactjs.org/docs/reconciliation.html)에 대한 리서치
3. 순수함수와 React 컴포넌트의 유사성 이해
4. 클래스 컴포넌트와 함수형 컴포넌트의 장단점 및 비교
