## 노마드 카데미 강의 듣고 정리하는 폴더

타입스크립트 타입+자바스크립트 

자바스크립트의 모든 특징을 이어 받은 슈퍼셋 언어

컴파일 언어 전통적인 컴파일언어랑은 다르지만 컴파일해서 
자바스크립트로 변환해야 되는 컴파일 언어

Why 타입스크립트 

1. interface  미리 타입을 선언 - 좀 더 흐름 파악하기 용이할 수 있다.
2. 자유도 -> 타입캐스팅 -> 버그 최소화
3. 타입스크립트만의 기능 제공 ->

언어가 예측가능하고 읽기 쉽게 잘 사용하기 위해서 

###  install

`npm init -y or yarn init -y`
then <br>
`npm install -g typescript` or `yarn global add typescript` <br>

then make file `tsconfig.json`

### tsconfig.json

1. compileOption

```js
module 어떤 module을 쓸 것인지 amd, commonjs
{
  "compilerOptions": {
    "module": "commonJs",
    "target": "ES2015",
    "sourceMap": true,
  },
  "include": [ "index.ts"],
  "exclude": ["node_modules"]
}
```

자 이제 `index.ts`를 만들고 
`tsc` 명령어로로 컴파일을 해보자 

`package.json`파일에
명령어로 start-> node index.js 
prestart ->tsc를 매칭시켜놓자

### 새롭게 배운 점

prestart는 앞에 pre가 붙으면 자동적으로 yarn start를 했을 때 prestart가 실행되고 yarn start가 실행된다 신기

### 들으면서 알아봐야 할 것들 

module -> commonJs import, export하게 해주는 것인지 대충 알겠는데 정확히 
target : -> es2015로 하는 의미가 .. es3나 es5로 하면 es6문법으로 한 것을 컴파일 하면 에러 나나?
확인해보기 
sourceMap sourceMap true로 해줘야 분리된 파일이 합쳐쳤을 떄 나중에 디버깅으로 부분 부분을 감지할 수 있는 걸로 알고 있는데 정확한 의미 파악하기 

include 컴파일 과정에서 필요한 파일들의 배열


