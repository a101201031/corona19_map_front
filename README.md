# Global Corona-19 Map
세계 코로나 지도 및 통계

## Dashboard: Global Total Info + Top 5 confirmed-cases
![image](https://user-images.githubusercontent.com/17742366/106281379-7ef22100-6282-11eb-9d65-72c8d861d4b1.png)
- 세계 총 확진자, 사망자, 완치자 표시, CountUp 사용
- 확진자 수 Top 5 나라의 확진자, 사망자 표시
- 신규 확진자 수 Top 5 나라의 확진자, 사망자 표시

## Map: Show Countries confiremd-cases
![image](https://user-images.githubusercontent.com/17742366/106283042-bfeb3500-6284-11eb-88d5-a808bad3d246.png)
- 세계지도에 국가 별 총 확진자 및 사망자 표시
- Google Charts Api 사용


## Stack
![image](https://user-images.githubusercontent.com/17742366/106283457-4d2e8980-6285-11eb-91e2-33e7bc473cd7.png)

## Code Tree
```
src
├── @types
│   └── process.env.d.ts
├── constants
│   └── ENV.ts
├── contexts
│   └── CtryItemsCont.tsx
├── javascript
│   ├── dateFormat.ts
│   ├── getCoronaInfo.ts
│   ├── getCountryImoji.ts
│   └── numWithComma.ts
├── lang
│   ├── index.ts
│   └── korean.ts
├── models
│   ├── countryItem.ts
│   └── index.ts
├── style
│   ├── Layout.ts
│   ├── Text.ts
│   ├── global.ts
│   ├── index.ts
│   └── interface.ts
├── App.tsx
├── ChartMap.tsx
├── Dashboard.tsx
├── InfoList.tsx
├── LastUpd.tsx
├── earth.jpg
├── index.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
└── setupTests.ts
```
