# Github Viewer

Github의 인기 저장소 목록을 확인할 수 있고, Github 사용자 간의 프로필을 대결 구도로 비교해 볼 수 있는 웹 어플리케이션입니다.

![github-viewer-Jul-10-2021_18-00-29](https://user-images.githubusercontent.com/77020787/140102308-aa947a0e-3504-44f9-b6eb-f0522a43a625.gif)

## Feature

- 대결 버튼 클릭 후 2개의 github 사용자 아이디 입력
- 2개의 github 아이디 미입력 시, 대결 진행 불가
- 대결 진행 버튼 클릭 시, 입력받은 2명의 Github 사용자 프로필을 비교하여 승자를 판별
- 승자 판별 기다리는 동안 Loading 컴포넌트 출력
- 승자 판별 후 각 사용자에 대해 아래의 정보 출력
    - 승패 여부
    - 프로필 사진
    - 점수
    - Github Username
    - 이름
    - 지역
    - Followers Count
    - Following Count
    - Repository Count
- Popular -> Battle & Battle 진행 -> Popular -> Battle 순으로 진행 시, 바로 이전에 진행했던 대결 결과 출력
- [Netlify](https://netlify.com/)를 이용하여 배포
    - [https://silly-pike-bc4b95.netlify.app/](https://silly-pike-bc4b95.netlify.app/)
    

## Installation

```
npm install

```

## Development

```
npm start
# Visit localhost:3000

```
