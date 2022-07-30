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
