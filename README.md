웹 **jQuery**, **Angular** 등의 프론트엔드에 대한 경험은 있지만, **React** 라는 새로운 툴에 대한 경험을 쌓아보자.

# Create a New React App

```
npx create-react-app app-name
```

or

```
yarn create react-app app-name
```

위 명령들이 무엇을 대신해 주는 지에 대해 궁금하다면 [Creating a React App… From Scratch.](https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658)참고.

## 불필요한 파일들 제거

* */public*, */src* 디렉토리만 남기고 내용파일들 삭제.
* package.json에 있는 패키지 중에 사욯하지 않는 것은 제거 할 수도 있지만 각각의 패키지 용도에 대한 고민은 나중으로...

## 기본 파일 추가 [v0.0.1](https://github.com/jihoekim/wanted-pre-onboarding-challenge-fe-1/releases/tag/v0.0.1)

* */public/index.html*
* */src/index.{css,js}* 
* */src/app.{css,js}*

# 라우팅을 위한 [react-router-dom](https://github.com/remix-run/react-router) 설치

```
yarn add react-router-dom
```
[react native](https://reactnative.dev/)를 사용한 개발이라면
```
yarn add react-router-native
```

## 앱에 필요한 URL들은? [v0.0.2](https://github.com/jihoekim/wanted-pre-onboarding-challenge-fe-1/releases/tag/v0.0.2)

* /auth/login : 로그인
* /auth/signup : 회원 가입
* /todo : todo 리스트

# Ajax 라이브러리

서버 API를 호출하기 위한 ajax 라이브러리로 [axios](https://axios-http.com/)를 설치한다.

```
yarn add axios
```

브라우저가 기본으로 제공하고 있는 xmlhttprequest 나 Fetch를 사용할 수도 있겠으나, 사용상의 편의 및 브라우저 호환성을 고려한 선택이다.

# AUTH

## Singup

요구 사항은 다음괴 갇다.

    최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요


    이메일과 비밀번호의 유효성을 확인합니다

        이메일 조건 : 최소 @, . 포함
        비밀번호 조건 : 8자 이상 입력
        이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요


### Component
* /src/auth/signup.js
  * 회원가입에 성공한 경우 로그인 페이지로 이동.
  * 실패시 서버에서 반환된 Message를 보여준다.

## Login

    로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요

        응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
        다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
        어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

### Component
* /src/auth/login.js
  * 이미 로그인 되어있는 경우 (로컬 스토리지에 토큰이 있는 경우) 홈으로.
  * 로그인 요청 성공시 홈으로.