# SOPT 홈페이지


## HISTORY 업데이트
### history 페이지 업데이트
1. public/data/history/index.json 에 해당 기수 정보 입력
    - history 페이지에 데이터 반영
    - 이미지 URL은 assets/history/{기수}/{파일명} 형식
    ```
      name: 기수 이름
      period: 활동 기간
      image: 기수 이미지
      display: 해당 버튼 노출 여부 (현재는 전체 노출)
    ```
  
2. 해당 이미지 경로에 이미지 업로드
    - public/assets/history/{기수}/{파일명}

  
### history/{기수} 페이지 업데이트
1. public/data/{기수}.json 파일 생성 및 정보 입력
    - history/{기수} 페이지에 데이터 반영
    - 이미지 URL은 /assets/history/{기수}/{파일명} 형식

2. 해당 이미지 경로에 이미지 업로드
    - public/assets/history/{기수}/{파일명}


## ARCHIVING 업데이트
### archiving 페이지 & archiving/{기수} 페이지 업데이트
1. public/data/archive/index.json 에 해당 APPJAM 정보 입력
    - archive/{기수} 페이지에 데이터 반영
    - 이미지 URL은 assets/appjam/{기수}/{파일명} 형식
    - *archive 페이지는 display: true 인 기수 중 가장 최근 기수로 이동
    ```
      name: 기수 이름
      period: 활동 기간
      image: 기수 이미지
      display: 기수 버튼 노출 여부 (diplay: none 시 버튼 노출 안됨, url 접속 가능)
    ```

2. 해당 이미지 경로에 이미지 업로드
    - public/assets/appjam/{기수}/{파일명}
