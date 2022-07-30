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
