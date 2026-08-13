# 대학 입시 포트폴리오 웹사이트 — Cursor 프로토타입 지시서

> **이 파일의 용도**: Cursor에게 "이 마크다운 파일을 읽고 프로토타입을 만들어줘"라고
> 그대로 지시하기 위한 문서입니다. `[ ]`, `TODO`, `(편집)` 표시된 부분은
> 직접 채워 넣거나 수정한 뒤 사용하세요.

---

## 0. 디자인 레퍼런스

- **참고 사이트**: https://readymag.website/u3657381597/Yeonjusuh/

| 항목 | 관찰 내용 (편집) |
|---|---|
| 전체 무드 | 예: 미니멀 / 매거진 에디토리얼 / 아트 갤러리 / 감성적 |
| 배경색 | 예: 아이보리 화이트(#F5F3EE) |
| 포인트 컬러 | 예: 딥그린(#2C3B2E) |
| 텍스트 컬러 | 예: 블랙(#111111) |
| 제목 폰트 스타일 | 예: 세리프, 얇은 굵기, 대문자, 자간 넓음 |
| 본문 폰트 스타일 | 예: 산세리프, 작은 사이즈, 라인하이트 넓음 |
| 그리드 성격 | 예: 비대칭 그리드 / 이미지가 텍스트를 가로지름 / 여백 큼 |
| 스크롤 방식 | 예: 세로 스크롤에 섹션마다 이미지가 페이드인 |
| 이미지 스타일 | 예: 풀블리드(화면 꽉 채움) 사진 / 얇은 테두리 프레임 |
| 내비게이션 방식 | 예: 좌측 고정 사이드 내비 / 우측 상단 미니멀 텍스트 메뉴 |
| 특징적인 인터랙션 | 예: 커서를 따라다니는 텍스트, 스크롤 시 이미지 확대 |
| 기타 특이사항 | (편집) |
---

## 1. 프로젝트 개요

- **목적**: 대학 입시(수시/특기자/해외대학 지원 등)를 준비하는 고등학생의 개인 포트폴리오 웹사이트 프로토타입
- **참고 스타일**: Readymag 기반 에디토리얼/매거진 스타일 개인 사이트 (0번 섹션 참고)
- **대상 독자**: 입학사정관, 추천서 작성 교사, 인터뷰어
- **핵심 원칙**: Resume 항목을 단순 나열이 아닌, 이미지·미디어와 함께 **비주얼 스토리텔링**으로 전달. 여백과 타이포그래피로 "짜임새 있는 매거진을 넘기는" 느낌을 준다.

---

## 2. 기술 스택

- **프레임워크**: React + Vite
- **스타일링**: Tailwind CSS + 커스텀 CSS (Readymag 특유의 세밀한 여백/타이포는 Tailwind 기본값을 넘어서는 커스텀 값이 필요할 수 있음)
- **애니메이션/스크롤**: Framer Motion (스크롤 트리거 페이드인, 패럴랙스), Lenis 또는 `scroll-behavior: smooth` (부드러운 스크롤)
- **폰트**: Google Fonts 또는 자체 호스팅 폰트 — 0번 섹션에서 정한 제목/본문 폰트 반영

---

## 3. 전체 구조

- **형식**: 싱글 페이지 세로 스크롤 (섹션 간 앵커 이동), Readymag 특유의 "페이지를 넘기는 듯한" 섹션 전환감 재현
- **내비게이션**: 화면 한쪽에 고정된 미니멀 텍스트 메뉴 (0번 섹션에서 관찰한 위치·스타일 따름). 스크롤에 따라 현재 섹션이 하이라이트됨
- **섹션 순서**:
  1. Introduction (인트로 / 커버)
  1-1. About Me
  2. Academics
  3. Activities
  4. Projects
  5. Volunteership
  6. Research & Publication
  7. Honors & Certificate
  8. Contact

---

## 4. 섹션별 상세 명세

각 섹션은 아래 형식을 따르며, `레이아웃 지시`는 Cursor가 컴포넌트를 만들 때 참고하는 지시문입니다.

### 4.1 Introduction
- **역할**: 사이트의 "표지" — 매거진 커버처럼 강한 첫인상
- **Reference Image Folder**: 01 Introduction 폴더 introimage.png 사용
- **포함 내용**:
  - 이름 (대형 타이포, 화면 중심 또는 좌측 정렬): John Yohwan Kim
  - 대표 사진 또는 배경 풀블리드 이미지: introimage.jpeg
  - 짧은 소개 문단: Weclome to John Yohwan Kim. This website is my integrated portfolio that ranges from Activities, Projects, Volunttership and Honors.
- **레이아웃 지시**: 뷰포트 전체를 채우는 히어로 섹션. 이름은 화면의 40~60% 너비를 차지할 정도로 크게. 이미지는 텍스트 뒤 또는 옆에 풀블리드로 배치. 스크롤 다운 유도 아이콘 하단에 배치.

#### 4.1.1 About Me
- **역할**: '내'가 누구인지 알려주는, 인상을 남기기 위한 자기 소개 섹션.
- **Reference Image Folder**: 01 Introduction 폴더 profile.jpg 사용
- **포함 내용**:
  - 소개 문단: Hello, my name is John Kim, a senior at St. Andrew’s School (DE). My life has been shaped  by different experiences that eventually resonated with each other as if three tuning forks were vibrating at a different frequency. Spending my teenage years in Dubai, raised in Korea, and studying in Delaware, I sought to make connections between seemingly different cultures and found motivation in helping others like me who struggled to assimilate. Throughout my life, I valued the idea of belonging where difference shouldn’t be the reason for seclusion. Fostered through these experiences, I earned the role of Form Council and East Asian Affinity group co-head to weave the gap among the students, creating bonds among disparate backgrounds. This goal formed from three different cultural identities was not only limited in social life at St. Andrew’s, but also shown through my interest towards rowing and violin. This led to my interest towards interdisciplinary Chemistry where innovative lab findings translate to the positive impact in the society holistically. Looking ahead, I hope to continue building communities and pursuing scientific discovery with the same belief that has guided me across the cultures, where differences become most meaningful when they bring us closer together.
    - 작은 Contact Form Card: 
    Name: John Yohwan Kim
    Email: johnyohwankim@caelumprep.com
    Tel: (+82)10-6251-6701
    Address: 37-48 Jamwon-Ro, Seoul, South Korea
- **레이아웃 지시**: 뷰포트 전체를 채우는 히어로 섹션. 프로파일 이미지를 중앙에 배치. 소개 문단을 프로파일 이미지 왼쪽에 텍스트로 배치. 프로파일 이미지 오른쪽에 Contact Form Card 배치.


#### 4.1.2 Introduction Video
- **역할**: Introudction Video 보여주기.
- https://www.youtube.com/watch?v=6mgNPUZqAmw 유투브 미디어 플레이어 삽입.


### 4.2 Academics
- **Reference Image Folder**: 02 Academics 폴더 참조, 파일 이름 확인
- **포함 내용**: 
Uchon Elementary School (Seoul, South Korea)			       (1st ~ 3rd) March 2014 ~ July 2016 52-1, Seongbuk-ro 4-gil, Seongbuk-gu, Seoul, Republic of Korea, 02831.

Regent International School (Dubai, United Arab Emirates)            (3rd ~ 5th) September 2016 ~  May 2019
The Greens, Emirates Living Community, First Al Khail St., Dubai, United Arab Emirates.

Sunmarke International School (Dubai, United Arab Emirates)	  (6th) September 2019 ~ February 2020
District 5 Block C, Al Barsha South Fifth, Jumeirah Village Triangle, Dubai, United Arab Emirates

Seoul Academy International School (Seoul, South Korea) 		      (6th ~ 8th) August 2020 ~ June 2023
16, Samseong-ro 64-gil, Gangnam-gu, Seoul, Republic of Korea, 06191.

St. Andrew’s School (Delaware)                                                                 (9th ~ 12th) August 2023 ~ May 2027
350 Noxontown Rd, Middletown, DE 19709
- **레이아웃 지시**: 텍스트 중심 섹션이므로 타이포그래피 위계로 정보 밀도 조절. 각 학력 왼쪽에 대응되는 학교 로고 이미지 삽입.

### 4.3 Activities
- **포함 내용**: 활동명/소속/기간/역할, 성과 중심 설명, 특기 분야 소개
- **Reference Image Folder**: 03 Activities 폴더 참조, 파일 이름 확인
- **레이아웃 지시**: 카드가 아닌 "매거진 화보"처럼 이미지가 크게, 텍스트는 이미지 옆 또는 위에 캡션 형태로. 항목마다 이미지 크기·위치를 다르게 배치해 리듬감을 준다 (비대칭 그리드). 이미지가 없을시 추후 편집을 위한 placeholder image을 넣을 것.

- image: Violin.jpg
First Violin Section in the Orchestra / St. Andrew’s School 			Sep 2023 ~ Present
Assistant Concert Master 							              Sep 2024 ~ May 2025
Second chair     					                     Sep 2023 ~ May 2024 & Sep 2025 ~ Present
Selected as Second Chair and Assistant Concert Master based on musical proficiency and leadership within the violin section, leading violin sectionals and assisted with ensemble preparation for concerts, ceremonies, and chapel performances.

- image: EAA.jpg
East Asian Affinity / St. Andrew’s School 					Sep 2025 ~ Present
Co-head
Fostered cultural awareness and strengthened engagement among East Asian students and the broader school community, co-leading initiatives promoting East Asian culture, inclusion, and cross-cultural dialogue across campus such as Mid-Autumn Festival and Lunar New Year.
Collaborated with faculty, dining services, and diversity leadership to organize culturally authentic celebrations and educational programming about East Asian traditions and heritage.
IV, V & VI Form Council / St. Andrew’s School 				Sep 2024 ~ Present
Grade-Elected Leader
Organized grade-level social events and community-building initiatives including Silent Disco, Semi-Formal, Open Mic Nights, Prom, and themed weekend events, leading event logistics, setup operations, and school-wide communications to maximize student engagement.

- image: RowingV.jpg
(Varsity) Rowing Crew								             Mar 2026 ~ Present
Stroke Pair / Bow Pair
Progressed from Freshman 8 as a stroke to bow pair in JV and Varsity boats through consistent athletic development and competitive performance.
Competed three times at the Stotesbury Cup Regatta: Freshman 8 semifinalist, JV/ 3V time trialist, and 2nd Senior Varsity boat (2V) semifinalist (Top 10 Time Trial Finish); Finished 4th at the Washington Metropolitan Interscholastic Rowing Association Regatta Finals.

-image: KISRA.jpg
KISRA Crew  	 Feb 2023 ~ Present
2 seat (Stroke) 4X Scull/ 2X Scull / 1X Scull
As a Gyeonggi-do Junior Representative, qualified for the National Finals for 1X U15 division, and received multiple silver medals for all three events: 4X, 2X, and 1X scull.
Participated in IDR (Independence Day Regatta) for both 2X and 1X U17 division.




### 4.4 Projects
- **포함 내용(프로젝트별)**: 프로젝트명/기간/역할/툴, 목표-과정-결과 요약, 링크
- **Reference Image Folder**: 04 Projects 폴더 참조, 파일 이름 확인
- **레이아웃 지시**: 프로젝트 1개당 하나의 "스프레드(spread)"처럼 구성 — 큰 스크린샷/데모 이미지 + 옆에 설명 텍스트. 스크롤에 따라 순차적으로 등장 (페이드인 또는 슬라이드인).

- image: placeholder
Biosense AI            							 July 2026 ~ Present
Project Director
Led the development of an AI platform that integrates Korea Disease Control and Prevention Agency (KDCA) public health datasets to analyze Korean-specific circulating tumor DNA (ctDNA) characteristics.
Co-designed biomarker-informed biosensor recommendations by matching ctDNA molecular profiles with chemically compatible biosensing technologies for early cancer detection.

- Media: https://youtu.be/fKv5-L8ZTfU
Clean Water Project: Row for Pure, Cut through Sweat			  Nov 2023 - Present
Managing Director of the Project
Inspired by cleaning up rivers and oceans, led the Trash Net System project, which aims to promote environmentalism among rowers by creating devices that collect trash on the water with rowing boats.
Created the Pet Net, the first prototype of the Trash Net System to collect trash.

- image: identityW.png
Identity Website Development/ AI Vibe-Coding			           May 2026 - Aug 2026
Project Leader / Front-End Developer
As a project leader, founded and led a multidisciplinary team to develop an AI-assisted website, coordinating designers and planners through clear role delegation and communication from concept to implementation.
Developed computer language skills and AI prototyping such as Javascript and HTML, applying them to make my own identity portfolio website. URL: https://lee-coin-dev.github.io/Yohwan-Portfolio/

- image: Photojournalism.jpg
Photojournalism: Korean Spirit, Eol			 		           May 2026 - Aug 2026
Main Writer and Editor
Researched and authored a photojournalism project examining how Seoul’s rapid postwar development was driven by the Korean spirit (Eol), combining historical analysis with visual elements. 
Synthesized historical sources into a cohesive narrative, strengthening research and writing skills.


### 4.5 Volunteership
- **포함 내용**: 종목/봉사 분야, 소속, 기간, 직책, 성과 또는 봉사 내용
- **레이아웃 지시**: 이미지 없이 텍스트만 배치. 각 활동 타이틀을 크게하고, 포지션/기간 등을 아래에 sub-heading 스타일로 배치, 이후 밑에 설명 배치.

Mentoring for Asians / St. Andrew’s School 					Sep 2023 ~ Present
Mentor
Participated in cross-school mentorship and dialogue programs focused on diversity and cultural understanding, fostering intercultural understanding by facilitating conversations on diversity and student experiences and team-building activities that encouraged collaboration and peer connections.


Misari Para-Rowing Competition					             July 2022 - Present
Leading Assistant of the Volunteers (https://youtu.be/afLzslYMqoQ) *썸네일 삽입하지 않고 하이퍼링크로만 삽입할것.
At Misari Para-Rowing Event for the disabled eager to learn rowing, as a leading assistant, arranged the settings for the event, prepared oars and ergometers, aligned single skulls, and guided the overall exercising process of the participants.


### 4.6 Research & Publication
- **포함 내용**: 하단 서술.
- **Reference Image Folder**: 06 Research&Publication 폴더 참조, 파일 이름 확인
- **레이아웃 지시**: 학술적 신뢰감을 위해 이 섹션만 상대적으로 정돈된 그리드(대칭)로. 논문 표지/포스터 이미지를 썸네일로, 클릭 시 상세 텍스트 확장(아코디언 또는 모달).

- image: ConcordR.png
The Concord Review 							         Aug 2025 ~ Nov 2025
(https://docs.google.com/document/d/1Tize74rhQJYRlJm9oEcRvXisDvs6CxX_KGKHywu20iE/edit?tab=t.0)
Submitted an original research essay, "The Mirage of the Middle East," about how the idea of Orientalism shifted across three distinct time periods in human history, and was waitlisted for publication consideration by The Concord Review.

- image: Pioneer.png
Pioneer Research 							        June 2026 ~ Aug 2026
Completed a peer-reviewed original research paper, “From Multiomic Biomarkers to Molecular Recognition: A Framework for Next-Generation Liquid Biopsy Biosensors,” proposing a chemistry-based framework integrating multiomic biomarkers with molecular recognition to guide next-generation biosensor design. 



### 4.7 Honors & Certificate
- **포함 내용**: 하단 내용 참조.
- **Reference Image Folder**: 07 Honors&Certificate 폴더 참조, 파일 이름 확인
- **레이아웃 지시**: 각 섹션별로 상장/자격증 이미지를 촘촘한 그리드(갤러리)로 배치, 이미지 그리드 옆에 텍스트 배치.

- image: placeholder
Robert T. Jordan Award 								May 2025
Awarded to one IV Form student recognized for exceptional character, perseverance, leadership, friendship, and positive contributions to the St. Andrew's community.

Violin Honors & Certificate
- image: ABRSM images
ABRSM Violin Grade 7 Merit
ABRSM Violin Grade 6 Distinction
ABRSM Music Theory Grade 5 Merit
ABRSM Violin Grade 5 Pass
ABRSM Violin Grade 4 Pass

Rowing Honors & Certificate
- image: Rowing images
Delaware Math League High School Division 2nd Place - Regional Team Individual (2024)
National History Day Competition: Junior Division Group - Website 3rd Place (2023)
3rd Misari Rowing Competition: Quad Sculling 2nd Place (2024)
3rd Misari Rowing Competition: Double Sculling 3nd Place (2024)
2nd Misari Rowing Competition: Quad Sculling 2nd Place (2023)
2nd Misari Rowing Competition: Single Sculling 2nd Place (2023)
2nd Misari Rowing Competition: Double Sculling 2nd Place (2023)
1st Misari Rowing Competition: Quad Sculling 2nd Place (2022)
1st Misari Rowing Competition: Single Sculling 2nd Place (2022)
1st Misari Rowing Competition: Double Sculling 2nd Place (2022)
Chungju Mayor's Cup National Sport-for-All Rowing Tournament - 4X division (U15) 1st Place (2022)
39th President's Cup National Inter-Province Rowing Regatta - Junior Men's Under 15 Single Scull 3nd Place (U17)
23rd Misari Rowing Competition: Indoor Rowing 3rd Place (U17)
2024 World Vision Global 6K for Water



### 4.8 (선택) Closing / Contact
- John Yohwan Kim, johnyohwankim@caelumprep.com
- 이메일, 소셜 링크 등 마무리 섹션. 인트로와 대칭되는 미니멀한 타이포 중심 레이아웃.

---

## 5. 공통 디자인 시스템 기본값 (레퍼런스 관찰 전 임시값)

> 0번 섹션을 채우면 이 값들을 덮어씁니다. 우선은 아래 기본값으로 프로토타입을 만들어도 됩니다.

- **컬러**: 배경 `#F7F6F2`(오프화이트), 텍스트 `#111111`, 포인트 컬러 TODO(편집)
- **제목 폰트**: 세리프 계열, 자간 넓게, 굵기 얇게 (예: Google Fonts `Playfair Display` 또는 `Cormorant`)
- **본문 폰트**: 산세리프 (예: `Inter`, `Pretendard`)
- **여백**: 섹션 상하 패딩 최소 120px(데스크톱), 섹션 간 명확한 구분감
- **그리드**: 12컬럼 기준이되, 요소는 그리드에 정확히 맞추기보다 의도적으로 살짝 어긋나게 배치 (에디토리얼 느낌)
- **애니메이션**: 스크롤 진입 시 opacity 0→1 + translateY 20px→0, duration 0.6~0.8s, ease-out

---

## 6. 데이터 구조 (Cursor가 컴포넌트에 바인딩할 형식)

```json
{
  "intro": {
    "name": "이름",
    "tagline": "한 줄 소개 / 지원 전공",
    "bio": "짧은 자기소개",
    "heroImage": "/images/intro/hero.jpg"
  },
  "academics": {
    "gpa": "4.0/4.0",
    "testScores": [{ "name": "SAT", "score": "1500" }],
    "courses": ["AP Calculus BC", "AP Physics C"]
  },
  "activities": [
    {
      "title": "활동명",
      "org": "소속",
      "period": "2023.03 - 2024.02",
      "role": "역할",
      "description": "성과 중심 설명",
      "media": ["/images/activities/1.jpg"]
    }
  ],
  "projects": [
    {
      "title": "프로젝트명",
      "period": "2024.03 - 2024.06",
      "role": "팀장 / 데이터 분석 담당",
      "tools": ["Python", "React"],
      "summary": "목표-과정-결과 요약",
      "media": ["/images/projects/1.jpg"],
      "link": "https://..."
    }
  ],
  "sportsVolunteer": [
    {
      "type": "sports",
      "title": "종목/분야명",
      "org": "소속",
      "period": "기간",
      "role": "직책",
      "result": "성과/내용",
      "media": ["/images/sports/1.jpg"]
    }
  ],
  "research": [
    {
      "title": "연구 주제",
      "institution": "기관/지도교수",
      "period": "기간",
      "abstract": "연구 요약",
      "publication": "저널/학회명, 날짜",
      "link": "https://...",
      "media": ["/images/research/1.jpg"]
    }
  ],
  "honors": [
    {
      "type": "honor",
      "title": "수상명/자격증명",
      "issuer": "수여/발급 기관",
      "date": "날짜",
      "grade": "등급/점수",
      "media": ["/images/honors/1.jpg"]
    }
  ]
}
```

---

## 7. Cursor 실행 지시 (이 문서 하단을 그대로 프롬프트로 사용)

```
이 마크다운 파일(portfolio-website-spec.md) 전체를 읽고,
0번 섹션의 디자인 레퍼런스 관찰 내용을 최우선 스타일 기준으로 삼아
React + Vite + Tailwind CSS 기반의 정적 프로토타입을 만들어줘.

요구사항:
1. 3번 섹션의 전체 구조와 4번 섹션의 섹션별 레이아웃 지시를 그대로 반영
2. 6번 섹션의 JSON 데이터 구조를 data/portfolio.json으로 만들고, 컴포넌트는 이 데이터를 불러와 렌더링
3. 각 섹션은 개별 컴포넌트 파일로 분리 (components/sections/*.tsx)
4. Framer Motion으로 스크롤 진입 애니메이션 적용 (5번 섹션 기본값 참고)
5. 이미지는 우선 플레이스홀더(회색 박스 + 파일 경로 텍스트)로 처리
6. 반응형(데스크톱/모바일) 기본 대응
7. 완성 후 실행 방법(npm install, npm run dev)을 알려줘
```

---

## 8. 다음 단계 체크리스트

- [ ] 0번 섹션 표를 실제 레퍼런스 사이트를 보며 채우기 (스크린샷 첨부 권장)
- [ ] Resume에서 각 섹션 실제 항목 정리 → 6번 데이터 구조에 채워 넣기
- [ ] 섹션별 이미지/영상 소스 준비
- [ ] 위 7번 프롬프트를 Cursor에 입력해 1차 프로토타입 생성
- [ ] 생성된 프로토타입을 레퍼런스 사이트와 비교하며 세부 스타일 조정 요청
