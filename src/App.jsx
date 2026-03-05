import { useState } from "react";
import profile from "./assets/profile.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FaUser, FaCalendarAlt, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub } from "react-icons/fa";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

export default function App() {
    const [open, setOpen] = useState(false);
    const [project, setProject] = useState(null);

    const projects = [
        {
            title: "집딱",
            summary: "수리·인테리어 전 과정을 한 번에 제공하는 통합 플랫폼 서비스",
            tech: ["springboot", "springsecurity", "jwt", "jpa", "querydsl", "mariadb", "react"],
            detail: "일반 사용자와 전문가를 매칭하고 견적 요청 및 관리를 할 수 있는 플랫폼입니다.",
            github: "https://github.com/KimJongJo/zipDDak",
            image: "/portfolio/logos/zipddak.png",

            // 상세보기에 대한 데이터
            period: "2025.11 ~ 2025.12",
            teamSize: 4,
            solo: false,
            award: "최우수상",
            architecture: "/portfolio/architecture/집딱아키텍처.png",
            mainRole: "서비스 핵심 로직(결제/정산/관리자) Full-Stack 개발",
            roles: [
                {
                    title: "사용자 서비스 기능 개발",
                    items: [
                        "커뮤니티 및 이미지 관리: 수리 노하우 공유를 위한 게시판 시스템을 구축하고, 이미지 업로드 및 미리보기 기능을 구현하여 사용자 간 원활한 이미지 기반 지식 공유 환경 조성",

                        "커머스 핵심 흐름 및 결제 보안: 자재 옵션 선택 시스템과 장바구니 기능을 구현하고, Toss Payments API 연동 시 프론트엔드 전달 값 대신 DB 데이터를 기준으로 서버 측 최종 결제 금액을 재계산하는 검증 로직을 설계하여 결제 데이터 무결성 확보",
                        "단계별 문답형 견적 시스템: 시공·수리·컨설팅 등 선택한 카테고리에 맞춰 필요한 질문만 순차적으로 나타나는 대화형 UI를 구현하여, 복잡한 요청서 작성 과정을 누구나 쉽게 할 수 있도록 개선",
                    ],
                },
                {
                    title: "통합 관리자 시스템(Back-office) 구축",
                    items: [
                        "입점 승인 워크플로우 설계: 전문가 및 업체의 입점 신청부터 '대기-승인-반려'로 이어지는 단계별 상태 관리 시스템을 구축하여, 복잡한 입점 프로세스를 운영자가 한눈에 확인하고 처리할 수 있도록 간편화",
                        "데이터 시각화 기반 매출 대시보드: Chart.js를 활용하여 전월 대비 수익 비교 및 푀근 6개월간의 수수료 수익 추이를 그래프로 시각화하여 비즈니스 지표 가독성 확보",
                        "정산 프로세스 자동화: 매월 1일 0시 10분마다 판매 및 매칭 데이터를 분석하여 정산 테이블을 자동 생성하는 시스템을 구축, 수동 정산의 번거로움을 제거하고 데이터 정확도 향상",
                    ],
                },
            ],

            trouble: {
                problem: [
                    "카디널리티 곱 발생: 전문가 정보와 연관된 '리뷰' 및'경력' 테이블(1:N 관계)을 QueryDSL로 동시 조인하면서 레코드가 기하급수적으로 중복 생성되는 현상이 발생했습니다.",
                    "데이터 부정합: 중복된 레코드로 인해 평균 평점이나 총 경력 합계 계산 시 실제 데이터보다 훨씬 높은 수치가 산출되는 치명적 오류가 나타났습니다.",
                ],
                solution: [
                    "집계 함수 최적화: 각 테이블의 PK를 기준으로 countDistinct()를 적용하여, 조인 과정에서 뻥튀기된 중복 레코드를 쿼리 수준에서 정확하게 필터링했습니다.",
                    "결과: 데이터 정합성을 100% 확보하여 기획 의도에 맞는 정확한 통계 정보를 출력할 수 있게 되었습니다.",
                ],

                improvement: [
                    "한계점 인식: 현재 방식은 데이터 양이 적을 때는 유효하나, 데이터가 방대해질 경우 매번 수행되는 무거운 조인과 집계 연산으로 인해 DB 부하가 급증할 우려가 있습니다.",
                    "개선 방향: 전문가 테이블에 평점, 매칭 수 컬럼을 직접 추가하는 반정규화를 검토 중입니다. 데이터 변경 시점에만 업데이트를 수행하고, 조회 시에는 연산 없이 컬럼만 읽어오게 하여 조회 성능을 극대화할 계획입니다.",
                ],
            },

            mainPage: "/portfolio/projects/zipddakMain.png",

            proImg: [
                {
                    title: "견적 요청",
                    img: "/portfolio/projects/zipddakRequest.png",
                    content: ["견적 유형별 질문이 분기되는 단계형 동적 폼 설계", "단계별 답변을 단일 객체로 통합 관리 후 일괄 저장", "페이지 이탈 시 상태 초기화 처리"],
                    plan: [
                        "견적 요청이 익숙하지 않은 사용자를 고려해 자유 입력 대신 선택형 단계 구조로 설계",
                        "작성 중 다른 견적 요청을 위해 재진입하는 상황을 고려하여 이전 입력값이 남지 않도록 구조 설계",
                    ],
                },
                {
                    title: "장바구니",
                    img: "/portfolio/projects/zipddakCart.png",
                    content: [
                        "브랜드 기준 상품 자동 분류 및 동일 상품 수량 합산 로직 구현",
                        "브랜드 단위 그룹화 데이터를 기반으로 장바구니 UI 구성",
                        "상품 유형(묶음/개별)에 따른 배송비 계상 및 총 결제 금액 자동 산출 로직 구현",
                    ],
                    plan: [
                        "브랜드마다 배송 정책이 다르기 때문에, 사용자가 각 브랜드별 배송 조건을 직관적으로 이해할 수 있도록 브랜드 단위로 묶어 보여주도록 설계",
                        "묶음 배송의 경우 무료 배송 전환 기준이 존재하므로, 사용자가 현재 금액과 무료 배송 조건을 쉽게 인지할 수 있도록 자동 계산 구조로 구현",
                    ],
                },
                {
                    title: "자재구매",
                    img: "/portfolio/projects/zipddakPayment.png",
                    content: [
                        "Toss Payments API 연동을 통한 결제 승인 프로세스 구현",
                        "DB 상품 정보를 기준으로 최종 결제 금액 재산출 및 검증 로직 설계",
                        "결제 승인 완료 시 주문 데이터 저장 및 결제 결과 실시간 반환",
                    ],
                    plan: ["결제 과정에서 발생할 수 있는 금액 변조 요청을 서버 단에서 차단하기 위해 클라이언트 값이 아닌 DB 기준 검증 구조로 설계"],
                },
                {
                    title: "관리자 페이지 통계",
                    img: "/portfolio/projects/zipddakAdmin.png",
                    content: [
                        "Chart.js 기반 매출·회원 지표 시각화 대시보드 구축",
                        "매월 1일 0시 10분 자동 실행되는 정산 스케줄러 구현",
                        "매출·수수료·회원 통계를 통합 조회할 수 있는 관리자 통계 기능 제공",
                    ],
                    plan: [
                        "운영자가 수치를 해석하지 않아도 흐름을 파악할 수 있도록 텍스트 기반 조회가 아닌 시각화 중심 구조로 설계",
                        "수동 정산 과정에서 발생할 수 있는 누락 및 계산 오류를 방지하기 위해 정기 실행 스케줄러 기반 자동 정산 구조 채택",
                    ],
                },
            ],
        },
        {
            title: "건강이음",
            summary: "정신건강 자가테스트와 병원 예약·진료를 제공하는 정신건강 플랫폼 서비스",
            tech: ["mybatis", "mariadb", "servletjsp", "jquery"],
            detail: "게시글 작성, 댓글, 좋아요 기능을 포함한 커뮤니티 웹 서비스입니다.",
            github: "https://github.com/KimJongJo/ieum",
            image: "/portfolio/logos/ieum.png",

            // 상세보기에 대한 데이터
            period: "2025.08 ~ 2025.10",
            teamSize: 4,
            solo: false,
            award: "최우수상",
            architecture: "/portfolio/architecture/건강이음아키텍처.png",
            roles: [
                {
                    title: "사용자 서비스 및 인증 개발",
                    items: [
                        "계정 통합 및 데이터 병합: 소셜 로그인 시 동일 이메일 존재 여부를 식별하여, 사용자 선택에 따라 기존 계정으로 데이터를 병합하거나 신규 계정을 생성하는 중복 가입 방지 로직 구현",
                        "진료 이력 시각화: FullCalendar 라이브러리를 활용하여 환자의 과거 기록을 달력 형태로 구현함으로써, 의료 이력을 직관적으로 확인 가능한 사용자 UI 제공",
                    ],
                },
                {
                    title: "병원/진료 관리 기능 구축",
                    items: [
                        "상태 기반 진단서 수정 제어: 진료 상태에 따른 동적 권한 로직을 적용하여, '진료 중'에는 자유로운 수정이 가능하나 '진료 완료'시 데이터 변조 방지를 위해 수정을 차단",
                        "상황별 의료 데이터 접근 권한: 진료 중인 환자의 경우 정확한 진단을 위해 과거 전체 이력 열람을 허용하되, 비진료 시에는 본인이 작성한 진단서만 열람 가능하도록 보안 로직 구축",
                    ],
                },
                {
                    title: "운영 관리자 기능 개발",
                    items: [
                        "병원 인증 및 입점 워크플로우: 입점 신청 승인 시 Google SMTP 서버를 연동하여 해당 병원 전용 고유 코드를 신청 이메일로 자동 발송하고, 회원가입 시 코드를 검증하는 보안 인증 프로세스 구현",
                        "회원 관리 및 상태 관제: 전체 사용자 활동 상태(활성/정지)제어 및 통합 회원 정보 관리 기능을 개발하여 플랫폼 운영 효율성 증대",
                    ],
                },
            ],

            trouble: {
                problem: [
                    "라이브러리 버전 이슈: pdf.js를 이용해 PDF를 이미지로 렌더링하려 했으나, 최신 버전 업데이트 과정에서 기존에 사용하던 주요 변수 및 API가 삭제되어 렌더링 오류가 발생했습니다.",
                    "불확실성 및 일정 압박: 삭제된 변수를 대체할 새로운 API를 적용하려 시도했으나, 연쇄적인 라이브러리 의존성 오류 가능성이 발견되었습니다. 프로젝트 마감에 임박한 상황에서 추가적인 기술적 변수를 해결하기에는 리스크가 크다고 판단했습니다.",
                ],
                solution: [
                    "브라우저 네이티브 기능 활용: 복잡한 외부 라이브러리 의존성을 제거하고, HTML5 표준인 <iframe> 태그를 활용하는 방식으로 즉시 전환했습니다.",
                    "결과: 일정 내에 관리자가 사업자등록증을 확인하고 승인 업무를 처리할 수 있는 안정적인 환경을 구축했습니다.",
                ],

                improvement: [
                    "라이브러리 재도전 및 최적화: 현재의 <iframe> 방식은 브라우저 환경에 따라 UI가 다르게 보일 수 있다는 한계가 있습니다. 향후 서비스 개선으로 최신 버전의 pdf.js 문서를 참고하면서 재도입을 검토할 예정입니다.",
                    "일관된 UX 제공: 라이브러리를 활용해 모든 브라우저 환경에서 동일한 디자인과 조작 방식을 제동하는 전용 뷰어를 구축하겠습니다. 이를 통해 어떤 환경의 사용자라도 혼란 없이 서비스를 이용할 수 있도록 사용자 경험의 완성도를 높이고자 합니다. ",
                ],
            },

            mainPage: "/portfolio/projects/ieumMain.png",

            proImg: [
                {
                    title: "진단서 작성",
                    img: "/portfolio/projects/ieumWrite.png",
                    content: [
                        "환자 고유 번호 기반의 과거 진료 이력 실시간 조회 및 연동",
                        "환자의 개인정보 공개 설정 여부에 따른 '심리 데이터' 선택적 출력 로직 구현",
                        "진료 단계(진료중/완료)에 따른 조건부 편집 및 데이터 수정 차단 기능 구축",
                    ],
                    plan: [
                        "의료진이 환자의 과거 병력을 즉각 파악하여 진료의 연속성을 유지할 수 있도록 데이터 조회 프로세스 설계",
                        "민감한 심리 데이터는 사용자의 명확한 '공유 동의'가 있을 때만 노출되도록 하여 환자의 프라이버시 보호",
                        "진료 완료 후 수정을 원천 차단하여 의료 기록의 신뢰성을 확보하고 휴먼 에러로 인한 데이터 오염 방지",
                    ],
                },
                {
                    title: "과거 진단 기록",
                    img: "/portfolio/projects/ieumHistory.png",
                    content: [
                        "의료진 본인이 작성한 진단서만 노출되도록 데이터 접근 권한 필터링 구현",
                        "진료 날짜 및 키워드 기반의 다중 검색 필터 기능을 통한 과거 기록 추적 시스템 구축",
                        "환자 고유 식별자(ID)를 활용한 인적 사항 및 과거 병력 데이터의 단일 화면 시각화",
                    ],
                    plan: [
                        "의료 정보의 무분별한 노출을 막기 위해 작성자 본인에게만 접근 권한을 부여하여 보안성과 책임성 강화",
                        "방대한 데이터 속에서 필요한 정보를 빠르게 찾을 수 있도록 다중 필터 로직을 설계하여 진료 효율서 개선",
                        "인적 사항과 병력을 한 화면에 시각화하여 정보 확인을 위한 불필요한 화면 전환과 시간 낭비 최소화",
                    ],
                },
                {
                    title: "병원 제휴 심사",
                    img: "/portfolio/projects/ieumAuth.png",
                    content: [
                        "사업자 정보 및 PDF 증빙 서류 업로드를 위한 멀티파트 데이터 수신 로직 구현",
                        "Google SMTP 연동을 통한 관리자 승인 기반 병원별 고유 인증 코드 자동 발송 시스템 구축",
                        "회원가입 시 고유 인증 코드 필수 검증 단계를 통한 비인가 사용자 가입 원천 차단",
                    ],
                    plan: [
                        "증빙 서류 기반의 '선 심사 후 가입' 프로세스를 설계하여 병원 도메인 특성에 맞는 플랫폼의 신뢰도 확보",
                        "관리자 승인과 이메일 발송을 하나의 흐름으로 연결해 편의성을 높이고 인증 코드 누락 실수를 방지",
                        "사전 승인된 사용자만 가입할 수 있도록 고유 코드 검증 단계를 필수화하여 비인가자의 접근을 엄격히 차단",
                    ],
                },
            ],
        },

        {
            title: "JMove",
            summary: "TMDB API 기반 영화 탐색 및 정보 제공 웹 서비스",
            tech: ["springboot", "springsecurity", "jwt", "jpa", "oracle", "react", "TMDB_API"],
            detail: "사용자 취향에 맞는 영화를 추천하고 상세 정보를 제공하는 서비스입니다.",
            github: "https://github.com/KimJongJo/JMove",
            image: "/portfolio/logos/jmove.png",

            // 상세 보기에 대한 데이터
            period: "2025.01 ~ 2025.02",
            teamSize: 1,
            architecture: "/portfolio/architecture/JMOVE아키텍처.png",
            solo: true,
            roles: [
                {
                    title: "영화 데이터 연동 및 조회",
                    items: [
                        "TMDB 외부 API 연동: TMDB(The Movie Database) API를 연동하여 실시간 인기·최신 영화 데이터를 수급",
                        "동적 데이터 검색: 사용자 검색어 기반의 실시간 데이터 필터링 로직을 개발하여 관련 영화 리스트를 즉각적으로 조회할 수 있는 환경 구축",
                        "상세 정보 렌더링 및 페이지 설계: 각 영화별 줄거리, 평점, 포스터 이미지 등 데이터를 구조화하여 상세 페이지내 최적화된 정보 노출 UI 설계",
                    ],
                },
                {
                    title: "사용자 편의 및 인증 시스템",
                    items: [
                        "관심 영화 북마크 시스템: 사용자가 선호하는 영화를 보관할 수 있는 북마크 기능을 구현하고, 관심 목록을 실시간으로 괄지(등록/해제)할 수 있는 프로세스 구축",
                        "OAuth 및 JWT 기반 인증 보안: 소셜 로그인 연동을 통해 자동 회원가입을 지원하며, JWT를 발급하여 매 요청 시 토큰의 유효성 만료 여부를 검증하는 안정적인 인증 보안 로직 구현",
                    ],
                },
            ],

            trouble: {
                problem: [
                    "엔티티 무한 참조 발생: JPA 양방향 연관관계가 설정된 엔티티를 JSON으로 직렬화하여 반환하는 과정에서, 서로를 무한히 참조하는 순환 구조로 인해 StackOverflowError가 발생했습니다.",
                    "원인 분석의 어려움: 초기에는 JPA의 동작 원리와 엔티티-JSON 변환 메커니즘에 대한 이해가 부족하여, 데이터가 중복 출력되거나 시스템이 다운되는 원인을 즉각적으로 파악하는 데 어려움을 겪었습니다.",
                ],
                solution: [
                    "DTO 도입: 엔티티를 외부로 직접 노출하지 않고, 필요한 데이터만 담는 DTO로 변환하여 반환하는 방식을 적용했습니다. 이를 통해 API 응답에서 연관관계 순환 고리를 원천 차단했습니다.",
                    "결과: 데이터 처리 오류를 완벽히 해결했으며, 화면에 꼭 필요한 데이터만 깔끔하게 전달할 수 있게 되었습니다.",
                ],
                improvement: [
                    "QueryDSL 과의 통합: 현재는 Spring Data JPA에서 제공하는 @EntityGraph를 주로 사용하고 있으나, 동적 쿼리가 복잡해질 경우를 대비해 QueryDSL 에서도 fetchJoin()을 적극적으로 활용하여 조회 로직의 유연성을 높일 계획입니다.",
                ],
            },

            mainPage: "/portfolio/projects/jmoveMain.png",
            proImg: [
                {
                    title: "로그인",
                    img: "/portfolio/projects/jmoveLogin.png",
                    content: ["카카오·네이버·구글 API 연동을 통한 소셜 간편 로그인 구현", "아이디 찾기 및 본인 인증 기반 비밀번호 재설정 기능 구축"],
                    plan: ["비밀번호 재설정 시 본인 확인 단계를 설계하여 계정 도용 방지 및 사용자 보안 강화"],
                },
                {
                    title: "영화정보",
                    img: "/portfolio/projects/jmoveMovie.png",
                    content: [
                        "TMDB API 비동기 연동을 통한 영화 상세 정보(줄거리, 평점 등) 실시간 수진",
                        "고화질 포스터 및 메타데이터를 활용한 영화 상세 정보 시각화",
                        "새로고침 없이 선택한 데이터를 즉시 확인할 수 있는 조회 시스템 구축",
                    ],
                    plan: [
                        "외부 API 호출 시 비동기 처리 방식을 채택하여 대량의 영화 데이터를 지연 없이 효율적으로 렌더링 하도록 설계",
                        "방대한 영화 데이터를 한꺼번에 불러올 때 발생하는 초기 로딩 지연을 방지하기 위해 데이터를 분할하여 요청하는 구조로 설계",
                    ],
                },
                {
                    title: "영화검색",
                    img: "/portfolio/projects/jmoveSearch.png",
                    content: [
                        "입력한 키워드에 일치하는 외부 API 영화 데이터를 조회하여 검색 전용 페이지로 연동",
                        "검색 페이지 내 재검색 시, 페이지 새로고침 없이 결과 데이터만 실시간으로 갱신하는 비동기 로직 구현",
                    ],
                    plan: [
                        "재검색 시 화면 깜빡임이 없는 비동기 방식을 적용하여 흐름이 끊기지 않는 탐색 환경 제공",
                        "변경된 데이터만 선택적으로 렌더링하여 브라우저의 부하를 줄이고 데이터 처리 속도 향상",
                    ],
                },
                {
                    title: "북마크",
                    img: "/portfolio/projects/jmoveMypage.png",
                    content: ["사용자 계정별 영화 북마크 저장 및 나만의 관리 페이지 구현", "관심 영화 리스트의 효율적인 분류 및 실시간 데이터 연동"],
                    plan: [
                        "사용자와 영화 간의 복잡한 다대다 관계를 'Favorite' 테이블을 매개채로 한 일대다 관계로 풀어내어 데이터 무결성 및 관리 편의성 확보",
                        "관심 정보를 한곳에 모아 관리할 수 있는 독립된 공간을 제공하여 정보 탐색의 효율성 및 서비스 재방문율 향상",
                    ],
                },
            ],
        },

        {
            title: "휠링캠프",
            summary: "여행지 추천과 여행 물품 구매·대여를 제공하는 여행 플랫폼 서비스",
            tech: ["springboot", "springsecurity", "mybatis", "thymeleaf", "oracle", "react", "jquery"],
            detail: "개인 소개와 프로젝트를 정리한 원페이지 포트폴리오 사이트입니다.",
            github: "https://github.com/KimJongJo/WheelingCamp",
            image: "/portfolio/logos/wheelingCamp.png",

            // 상세 보기에 대한 데이터
            period: "2024.05 ~ 2024.06",
            teamSize: 6,
            architecture: "/portfolio/architecture/휠링캠프아키텍처.png",
            solo: false,
            roles: [
                {
                    title: "실시간 채팅 시스템",
                    items: [
                        "Spring WebSocket 기반 실시간 메시징: Spring에서 제공하는 WebSocket을 활용하여 회원과 관리자 간의 1:1 실시간 채팅 기능을 구현하고, 메시지 수신 시 즉각적인 알림 시스템 구축",
                        "미확인 메시지 관리 및 카운팅: 사용자별 읽지 않은 메시지 수를 실시간으로 집계하고 표시하는 기능을 구현하여, 빠른 응답과 원활한 소통이 가능한 환경 구축",
                    ],
                },
                {
                    title: "사용자 인증 및 계정 관리",
                    items: [
                        "OAuth 기반 간편 인증 프로세스: 소셜 로그인 연동을 통해 복잡한 절차 없이 회원가입 및 인증이 가능하도록  프로세스를 간소화하여 사용자 진입 장벽 완화",
                        "계정 복구 및 관리 시스템: 아이디/비밀번호 찾기 등 사용자 계정 분실 시 복구 가능한 관리 기능을 구현하여 서비스 신뢰성 및 유지보수성 확보",
                    ],
                },
                {
                    title: "쇼핑 편의 기능",
                    items: [
                        "다중 상품 장바구니 시스템: 여러 상품을 한 번에 관리하고 일괄 결제할 수 있는 장바구니 로직을 개발하여 구매 전환율 및 결제 편의성 개선",
                        "관심 상품 및 재방문 유도: 사용자가 선호하는 상품을 저장할 수 있는 즐겨찾기 기능을 구현하여, 마이페이지를 통한 구매 접근 성을 높이고 서비스 재방문율 향상",
                    ],
                },
            ],

            trouble: {
                problem: [
                    "데이터 잔존 현상: 로그인, 아이디 찾기, 비밀번호 찾기 모달이 각각 독립적으로 존재했으나, 한 모달에서 입력 도중 다른 모달로 전환했다가 돌아오면 이전 입력값이 그대로 남아 있는 UX 오류가 발생했습니다.",
                    '요소 참조 오류: 이를 해결하기 위해 모달창이 닫히거나 전환되는 직전에 입력값을 초기화하려 시도했으나, 브라우저가 해당 DOM 요소를 참조하지 못하거나 이벤트 순서가 꼬이면서 "요소를 찾을 수 없다"는 스크립트 에러가 빈번하게 발생했습니다.',
                ],
                solution: [
                    "초기화 시점의 전환: 데이터를 비우는 시점을 '나갈 때'가 아닌 '모달이 열리는 시점'으로 변경했습니다.",
                    "결과: 어떤 경로로 모달에 진입하든 항상 깨끗한 입력창을 보장할 수 있게 되었으며, 이전 방식에서 발생하던 콘솔 에러를 완벽히 차단하여 웹 페이지의 안정성을 확보했습니다.",
                ],
                improvement: [
                    "사용자 환경 기반의 반응형 UI 구축: 캠핑장 등 야외에서 스마트폰으로 접속하는 사용자가 많은 서비스 특성을 고려하여, 모바일 최적화 반응형 UI를 구축할 계획입니다.",
                    "저속 네트워크 대응: 인터넷 속도가 느린 환경에서도 빠른 로딩을 보장하기 위해 사용자가 업로드한 이미지를 서버단에서 WebP 포맷으로 자동 변환하여 저장하여 사용자의 체감 속도를 개선하고자 합니다.",
                ],
            },

            mainPage: "/portfolio/projects/wheelMain.png",

            proImg: [
                {
                    title: "로그인",
                    img: "/portfolio/projects/wheelLogin.png",
                    content: [
                        "브라우저 쿠키를 활용한 계정 정보 기억 및 자동 완성 기능 구현",
                        "소셜 로그인 연동 및 신규 가입자를 위한 맞춤형 추가 정보 수집 로직 구축",
                        "Google SMTP 연동을 통한 이메일 인증 및 실시간 중복 가입 방지 시스템 구축",
                    ],
                    plan: [
                        "쿠키 기반의 로그인 편의 기능을 제공함과 동시에, 이메일 인증 절차를 설계하여 무분별한 계정 생성을 방지하고 계정의 신뢰도 확보",
                        "소셜 로그인의 간결함은 유지하되, 서비스 운영에 필수적인 추가 정보를 가입 단계에서 수집하도록 설계하여 사용자 맞춤형 서비스 기반 마련",
                    ],
                },
                {
                    title: "아이디/비밀번호찾기",
                    img: "/portfolio/projects/wheelFind.png",
                    content: [
                        "가입 유형(일반/소셜) 식별을 통한 맞춤형 로그인 경로 안내 및 플랫폼 정보 제공",
                        "본인 인증 기반의 비밀번호 재설정 기능 구현으로 안전한 계정 복구 지원",
                        "Google SMTP를 활용한 이메일 인증 코드 발송 및 무단 변경 방지 로직 구축",
                    ],
                    plan: [
                        "소셜 계정 사용자가 가입 플랫폼을 잊어버리는 상황을 고려하여, 가입 유형별 맞춤형 가이드를 제공하고 정확한 로그인 경로 유도",
                        "이메일 인증을 통한 본인 확인 절차를 설계하여 타인의 무단 접근을 차단하고, 비밀번호 분실 시에도 사용자가 안전하게 계정 권한을 회복할 수 있도록 구현",
                    ],
                },
                {
                    title: "관심상품/장바구니",
                    img: "/portfolio/projects/wheelCart.png",
                    content: [
                        "상품 유형(일반 구매/기간제 대여)별 맞춤형 장바구니 프로세스 관리",
                        "선택 상품의 실시간 데이터베이스 동기화 및 선택적 삭제 기능 구현",
                        "구매·대여 상품 혼합 시에도 정확한 총 결제 금액을 산출하는 실시간 연산 로직 구축",
                    ],
                    plan: [
                        "상품의 판매 방식에 따라필요한 데이터 항목(대여 기간 등)이 달라지는 구조를 설계하여, 다양한 상품 유형에 대응하는 데이터 처리의 정확성 확보",
                        "체크박스 선택에 따른 실시간 금액 변동을 즉각적으로 반영하여 사용자에게 정확한 결제 정보를 제공하고, 탐색부터 결제 준비까지의 과정을 매끄럽게 연결",
                    ],
                },
                {
                    title: "1:1 채팅",
                    img: "/portfolio/projects/wheelChat.png",
                    content: [
                        "Spring WebSocket 기반의 양방향 통신을 활용한 실시간 1:1 채팅 및 알림 기능 구현",
                        "상대방의 메시지 확인 여부에 따른 실시간 읽음 상태 처리 및 미확인 메시지 카운트 표시",
                        "관리자 대시보드 내 미응답 채팅 최상단 배치 등 동적 정렬 시스템 구축",
                    ],
                    plan: [
                        "웹소켓 프로토콜을 활용해 새로고침 없는 데이터 송수신 환경을 구축함으로써, 상담 과정에서의 지연 시간을 최소화하고 사용자 경험 극대화",
                        "읽지 않은 메시지 수량의 실시간 집계 및 관리자용 우선순위 정렬 로직을 통해 응대 누락을 방지하고 서비스 관리 효율성 향상",
                    ],
                },
            ],
        },
        {
            title: "언더 더 씨",
            summary: "씨앗 구매와 커뮤니티 기능을 제공하는 씨앗 플랫폼 서비스",
            tech: ["springboot", "springsecurity", "mybatis", "servletjsp", "thymeleaf", "oracle"],
            detail: "게시글 작성, 댓글, 좋아요 기능을 포함한 커뮤니티 웹 서비스입니다.",
            github: "https://github.com/KimJongJo/Seed",
            image: "/portfolio/logos/seed.png",

            // 상세 보기에 대한 데이터
            period: "2024.04 ~ 2024.05",
            teamSize: 3,
            architecture: "/portfolio/architecture/언더더씨아키텍처.png",
            solo: false,
            roles: [
                {
                    title: "상품 정보 및 쇼핑 기능",
                    items: [
                        "동적 상품 카탈로그 및 상세 페이지: 카테고리별 상품 필터링 조회 기능을 구현하고, 각 상품의 상세 정보와 이미지를 최적화하여 노출하는 UI 설계",
                        "영속성 기반 장바구니 시스템: 다중 상품 선택, 수량 변경 및 개별/전체 삭제가 가능한 장바구니 로직을 구축하여 편리한 쇼핑 환경 제공",
                    ],
                },
                {
                    title: "고객 상담 및 계정 관리",
                    items: [
                        "사용자 간 양방향 문의 게시판: 사용자들끼리 자유롭게 질문을 등록하고 답변을 공유할 수 있는 커뮤니티 시스템 구현",
                        "BCrypt 기반 보안 인증 시스템: Spring Security의 BCrypt 암호화를 적용하여 비밀번호를 안전하게 보호하고, 이메일 인증을 통한 계정 찾기 기능을 구현하여 인증 보안 체계 강화",
                        "계정 비활성화 기반의 탈퇴 로직: 사용자 탈퇴 시 데이터를 물리적으로 즉시 삭제하는 대신, 계정 상태를 '비활성화'로 전환하여 데이터의 무결성을 유지하면서도 로그인을 원천 차단하는 보안 프로세스 구현",
                    ],
                },
                {
                    title: "운영 관리자 기능",
                    items: [
                        "상품 콘텐츠 매니지먼트: 신규 상품의 정보를 등록하고 수정할 수 있는 관리자 전용 인터페이스 개발",
                        "실시간 재고 및 판매 상태 제어: 재고 상황에 따라 판매 중/품절 상태를 즉각적으로 전환하는 시스템을 구축하여 실제 재고와 판매 현황 간의 정합성 유지",
                    ],
                },
            ],

            trouble: {
                problem: [
                    "브라우저 프리징 현상: 아이디/비밀번호 찾기 시 이메일 발송 로직을 동기 방식으로 처리하여 SMTP 서버와 통신하는 동안 사용자의 브라우저 화면이 완전히 멈춰버리는 결함이 발생했습니다.",
                ],
                solution: ["비동기 요청: 자바스크립트의 fetch를 활용해 요청을 비동기로 전환하고, 서버의 응답을 기다리는 중에도 카운트다운 기능이 정상적으로 작동하도록 개선했습니다."],

                improvement: [
                    "통신 단계의 효율화: 현재 사용중인 SMTP 방식은 메일을 보낼 때마다 서버와 '연결-로그인-대상 확인-전송'이라는 여러 번의 승인 절차를 반복해야 하므로, 통신 횟수가 누적되어 약 5초의 시간이 소요되는 한계가 있습니다. 이를 단 한번의 요청으로 전송이 완료되는 Gmail API 방식으로 전황하여, 불필요한 중간 확인 절차를 생략하고 전송 시간을 획기적으로 단축할 계획입니다.",
                ],
            },

            mainPage: "/portfolio/projects/seedMain.png",

            proImg: [
                {
                    title: "상품 검색",
                    img: "/portfolio/projects/seedSearch.png",
                    content: [
                        "사용자 입력 키워드 기반의 실시간 데이터베이스 조회 및 상품 매칭 시스템 구축",
                        "검색 결과 부재 시, 예외 처리 전용 페이지 노출을 통한 사용자 이탈 방지 로직 구현",
                        "가격순(높은/낮은순) 등 사용자 설정 기준에 따른 비동기 리스트 재정렬 기능 구현",
                    ],
                    plan: [
                        "검색 결과가 없는 상황에서도 빈 화면 대신 안내 페이지를 제공하여 사용자 경험의 단절을 막고 서비스 잔류",
                        "리스트 정렬 시 비동기 통신을 활용해 전체 페이지 새로고침 없이 필요한 데이터만 업데이트함으로써 탐색 속도 및 편의성 강화",
                    ],
                },
                {
                    title: "상품 등록",
                    img: "/portfolio/projects/seedAdd.png",
                    content: [
                        "관리자 전용 인터페이스를 통한 신규 상품 정보의 체계적인 등록 및 데이터베이스 저장 시스템 구축",
                        "등록 데이터의 즉각적인 영속화 처리를 통해 사용자 페이지 내 실시간 정보 반영 구현",
                    ],
                    plan: [
                        "관리자 전용 인터페이스를 통해 신규 상품 정보를 입력하고 데이터베이스에 안전하게 기록하는 관리 시스템 구현",
                        "등록된 데이터가 DB에 즉시 저장되어, 일반 사용자가 페이지 접근 및 새로고침 시 최신 정보를 즉각 확인할 수 있는 환경 구축",
                    ],
                },
                {
                    title: "상품 품절 및 판매 관리",
                    img: "/portfolio/projects/seedEnd.png",
                    content: [
                        "상품 상태(판매 중/품절) 전환 관리 로직 구현 및 상태 값에 따른 리스트 동적 필터링 적용",
                        "판매 중지 상품의 상태 재전환 시, 추가 절차 없이 즉시 노출되는 데이터 연동 구조 구축",
                    ],
                    plan: [
                        "상품의 상태 값을 데이터베이스와 실시간으로 연동하여, 판매 가능 여부에 따라 사용자 화면에 상품이 유연하게 노출되도록 제어 로직 설계",
                        "복잡한 재등록 과정 없이 상태 변경만으로 상품의 판매 재개가 가능하도록 설계하여 관리 업무의 편의성 및 운영의 신속성 강화",
                    ],
                },
                {
                    title: "장바구니",
                    img: "/portfolio/projects/seedCart.png",
                    content: [
                        "상품 목록 및 상세 페이지 등 다각화된 경로를 통한 즉시 장바구니 담기 기능 구현",
                        "장바구니 내 개별 상품 수량 조절 및 선택/해제 상태의 실시간 데이터 동기화",
                        "선택 상품 및 수량 변경에 따른 총 결제 예정 금액의 실시간 비동기 연산 로직 구축",
                    ],
                    plan: [
                        "사용자의 위치와 관계없이 원하는 시점에 상품을 담을 수 있도록 인터페이스를 설계하여 구매 전환 과정의 번거로움 최소화",
                        "페이지 새로고침 없이도 수량 변경과 금액 산출이 즉각적으로 이루어지는 비동기 환경을 구축하여 사용자의 혼란을 방지하고 매끄러운 쇼핑 경험 보장",
                    ],
                },
                {
                    title: "문의 게시판",
                    img: "/portfolio/projects/seedWrite.png",
                    content: ["게시글 및 댓글의 작성·조회·수정·삭제(CRUD) 전반에 걸친 관리 시스템 구축", "게시글 '좋아요' 및 실시간 조회수 집계 로직을 통한 사용자 반응형 데이터 처리 구현"],
                    plan: [
                        "사용자들이 자유롭게 정보를 공유하고 의견을 교환할 수 있는 인터페이스를 설계하여 커뮤니티 내 사용자 참여도 증대 유도",
                        "조회수와 좋아요 등 활동 지표를 실시간으로 집계 및 반영함으로써, 콘텐츠의 영향력을 직관적으로 파악할 수 있는 지표 제공",
                    ],
                },
            ],
        },
    ];

    const techIcons = {
        // Frontend
        html: "/portfolio/skillImgs/html.png",
        css: "/portfolio/skillImgs/css.png",
        javascript: "/portfolio/skillImgs/js.png",
        jquery: "/portfolio/skillImgs/jquery.png",
        react: "/portfolio/skillImgs/react.png",

        // Backend
        java: "/portfolio/skillImgs/java.png",
        servletjsp: "/portfolio/skillImgs/jsp.png",
        thymeleaf: "/portfolio/skillImgs/thymeleaf.png",
        springboot: "/portfolio/skillImgs/springBoot.png",
        springsecurity: "/portfolio/skillImgs/security.png",
        jpa: "/portfolio/skillImgs/jpa.png",
        querydsl: "/portfolio/skillImgs/queryDsl.png",
        mybatis: "/portfolio/skillImgs/mybatis.png",
        jwt: "/portfolio/skillImgs/jwt.png",

        // Database
        oracle: "/portfolio/skillImgs/oracle.png",
        mysql: "/portfolio/skillImgs/mysql.png",
        mariadb: "/portfolio/skillImgs/mariaDB.png",

        // Tools
        github: "/portfolio/skillImgs/github.png",
        git: "/portfolio/skillImgs/git.png",
        figma: "/portfolio/skillImgs/figma.png",
        postman: "/portfolio/skillImgs/postman.png",
        notion: "/portfolio/skillImgs/notion.png",

        // External / API
        TMDB_API: "/portfolio/skillImgs/TMDB_API.png",
        GPT_API: "/portfolio/skillImgs/GPT_API.png",
    };

    return (
        <div className="page">
            <div className="container1">
                {/* HERO */}
                <section className="hero">
                    <div className="hero-bg" />
                    <img src={profile} className="profile" />
                    <h1>
                        안녕하세요, <br />
                        백엔드 개발자 <br />
                        <span className="highlight-name">김종조</span> 입니다.
                    </h1>
                    <p className="subtitle">
                        문제가 생기면 끝까지 남아 해결하려고 합니다. <br />
                        에러를 그냥 넘기지 않고, 원인을 이해하려 합니다. <br />
                    </p>
                    <div className="buttons">
                        <a href={`${import.meta.env.BASE_URL}김종조이력서.pdf`} download className="outline">
                            📄 이력서 다운로드
                        </a>
                    </div>

                    <div className="contact-info-wrapper">
                        {/* 1번째 줄 */}
                        <div className="contact-row">
                            <div className="contact-item">
                                <div className="contact-item-div">
                                    <FaUser size={20} />
                                    <div className="contact-item-text">
                                        <span className="label">이름</span>
                                        <span className="value">김종조</span>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-item-div">
                                    <FaCalendarAlt size={20} />
                                    <div className="contact-item-text">
                                        <span className="label">생년월일</span>
                                        <span className="value">00.03.09</span>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-item-div">
                                    <FaMapMarkerAlt size={20} />
                                    <div className="contact-item-text">
                                        <span className="label">위치</span>
                                        <span className="value">서울특별시 중랑구</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2번째 줄 */}
                        <div className="contact-row">
                            <div className="contact-item">
                                <div className="contact-item-div">
                                    <FaPhone size={20} />
                                    <div className="contact-item-text">
                                        <span className="label">연락처</span>
                                        <span className="value">010-5270-8614</span>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-item-div">
                                    <FaEnvelope size={20} />
                                    <div className="contact-item-text">
                                        <span className="label">이메일</span>
                                        <span className="value">desk1614@gmail.com</span>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-item-div">
                                    <FaGithub size={20} />
                                    <div className="contact-item-text">
                                        <span className="label">깃허브</span>
                                        <a href="https://github.com/KimJongJo" target="_blank" className="value link">
                                            github.com/KimJongJo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>사용 기술</h2>

                    <div className="skill-group">
                        <h3>Frontend</h3>
                        <div className="skills">
                            <div className="skill-icon">
                                <img className="skill-imgs" src="/portfolio/skillImgs/html.png" alt="HTML" />
                                <span className="tooltip">HTML</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/portfolio/skillImgs/css.png" alt="CSS" />
                                <span className="tooltip">CSS</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/portfolio/skillImgs/js.png" alt="JavaScript" />
                                <span className="tooltip">JavaScript</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/portfolio/skillImgs/jquery.png" alt="jQuery" />
                                <span className="tooltip">jQuery</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/portfolio/skillImgs/react.png" alt="React" />
                                <span className="tooltip">React</span>
                            </div>
                        </div>
                        <ul className="skill-content">
                            <li>React 컴포넌트 구조로 UI를 구성하고 서버 API와 연동합니다.</li>
                            <li>Axios를 사용하여 비동기 통신을 처리하고, HTTP 상태 코드에 따른 공통 예외 처리를 수행합니다.</li>
                            <li>Jotai로 전역 상태를 관리하고 React Router로 SPA의 경로를 제어합니다.</li>
                        </ul>
                    </div>

                    <div className="skill-group">
                        <h3>Backend</h3>

                        <div className="skills">
                            <div className="skill-icon">
                                <img className="skill-imgs" src="/portfolio/skillImgs/java.png" alt="HTML" />
                                <span className="tooltip">Java</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/portfolio/skillImgs/jsp.png" alt="CSS" />
                                <span className="tooltip">Servlet&Jsp</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/portfolio/skillImgs/thymeleaf.png" alt="JavaScript" />
                                <span className="tooltip">Thymeleaf</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/portfolio/skillImgs/springBoot.png" alt="React" />
                                <span className="tooltip">Spring Boot</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/portfolio/skillImgs/security.png" alt="React" />
                                <span className="tooltip">Spring Security</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/portfolio/skillImgs/jpa.png" alt="React" />
                                <span className="tooltip">JPA</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/portfolio/skillImgs/queryDsl.png" alt="React" />
                                <span className="tooltip">QueryDSL</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/portfolio/skillImgs/mybatis.png" alt="React" />
                                <span className="tooltip">Mybatis</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/portfolio/skillImgs/jwt.png" alt="React" />
                                <span className="tooltip">JWT</span>
                            </div>
                        </div>
                        <ul className="skill-content">
                            <li>Java와 Spring Boot를 활용하여 API 서버를 구축하고 비즈니스 로직을 구현합니다.</li>
                            <li>Controller - Service - Repository 계층 분리를 적용하여 각 레이어의 역할을 독립적으로 관리합니다.</li>
                            <li>Thymeleaf와 JSP 템플릿 엔진을 사용하여 서버 사이드 화면을 렌더링합니다.</li>
                            <li>Spring Security와 JWT, OAuth2를 조합하여 토큰 기반의 사용자 인증 및 권한 로직을 구현합니다.</li>
                            <li>JPA(QueryDSL)및 MyBatis를 사용하여 DB 접근 객체를 구현하고 동적 쿼리를 처리합니다.</li>
                        </ul>
                    </div>

                    <div className="skill-group">
                        <h3>Database</h3>
                        <div className="skills">
                            <div className="skill-icon">
                                <img className="skill-imgs" src="/portfolio/skillImgs/oracle.png" alt="HTML" />
                                <span className="tooltip">Oracle</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/portfolio/skillImgs/mysql.png" alt="CSS" />
                                <span className="tooltip">Mysql</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/portfolio/skillImgs/mariaDB.png" alt="JavaScript" />
                                <span className="tooltip">mariaDB</span>
                            </div>
                        </div>
                        <ul className="skill-content">
                            <li>Oracle, MySQL, MariaDB를 사용하여 요구사항에 맞는 테이블을 설계하고 ERD를 도출합니다.</li>
                        </ul>
                    </div>

                    <div className="skill-group">
                        <h3>Tools & Environment</h3>
                        <div className="skills">
                            <div className="skill-icon">
                                <img className="skill-imgs" src="/portfolio/skillImgs/github.png" alt="GitHub" />
                                <span className="tooltip">GitHub</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/portfolio/skillImgs/git.png" alt="Git" />
                                <span className="tooltip">Git</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/portfolio/skillImgs/figma.png" alt="Figma" />
                                <span className="tooltip">Figma</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/portfolio/skillImgs/postman.png" alt="Postman" />
                                <span className="tooltip">Postman</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/portfolio/skillImgs/notion.png" alt="Notion" />
                                <span className="tooltip">Notion</span>
                            </div>
                        </div>
                        <ul className="skill-content">
                            <li>Eclipse, IntelliJ, VS Code를 활용하여 코드 작성 및 프로젝트 개발을 진행합니다.</li>
                            <li>Maven 및 Gradle을 사용하여 필요한 라이브러리를 관리하고 프로젝트를 빌드합니다.</li>
                            <li>Git과 GitHub로 소스 코드의 버전을 관리하며 팀 프로젝트에 참여합니다.</li>
                            <li>Figma, Postman, Notion을 활용하여 요구사항 정의서, ERD, 컴포넌트 정의서 등 프로젝트 문서를 공유하고 기획 내용을 확인합니다.</li>
                        </ul>
                    </div>
                </section>

                {/* PROJECTS */}
                <section id="projects">
                    <h2>프로젝트</h2>
                    <div className="project-list">
                        {projects.map((p) => (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                }}
                                key={p.title}
                                className="project-card"
                                onClick={() => {
                                    setProject(p);
                                    setOpen(true);
                                }}
                            >
                                <div>
                                    <h3
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "5px",
                                        }}
                                    >
                                        <img style={{ width: "40px", height: "40px" }} src={p.image} alt="" />
                                        <div>{p.title}</div>
                                    </h3>
                                    <p>{p.summary}</p>
                                </div>
                                <div className="project-tech-icons">
                                    {p.tech.map((t) => (
                                        <div key={t} className="project-tech-icon-wrapper">
                                            <img src={techIcons[t]} alt={t} className="project-tech-icon" />
                                            <span className="tooltip-text">{t}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* BLOG */}
                <section>
                    <h2>블로그</h2>
                    <a className="link" href="https://velog.io/@desk1614/posts" target="_blank">
                        블로그 바로가기 →
                    </a>
                </section>

                {/* MODAL */}
                <Modal isOpen={open} toggle={() => setOpen(false)} centered>
                    {project && (
                        <>
                            <ModalHeader toggle={() => setOpen(false)}>
                                <div className="modal-header-div">
                                    <img className="modal-logo" src={project.image} alt="" />
                                    <span className="modal-title">{project.title}</span>
                                    {project.award ? <span className="project-award">{project.award}</span> : <></>}
                                    <span className={`project-badge ${project.solo ? "solo" : "team"}`}>{project.solo ? "개인 프로젝트" : "팀 프로젝트"}</span>
                                </div>
                            </ModalHeader>

                            <ModalBody>
                                <div className="modal-body-div">
                                    <div className="modal-subtitle">{project.summary}</div>
                                    <img src={project.mainPage} alt="" />

                                    <section className="modal-section">
                                        <h5 className="modal-section-title">프로젝트 개요</h5>
                                        <div className="overview">
                                            <div className="overview-item">
                                                <span className="label">기간</span>
                                                <span className="value">{project.period}</span>
                                            </div>
                                            <div className="overview-item">
                                                <span className="label">인원</span>
                                                <span className="value">{project.teamSize}명</span>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="modal-section">
                                        <h5 className="modal-section-title">서비스 아키텍처</h5>
                                        <div className="overview architecture-div-img">
                                            <img className="architecture-img" src={project.architecture} alt="" />
                                        </div>
                                    </section>

                                    <section className="modal-section">
                                        <h5 className="modal-section-title">주요 역할</h5>
                                        {project.roles.map((role, i) => (
                                            <div key={i} className="role-group">
                                                {/* <div>{project.mainRole}</div> */}
                                                <strong className="role-title">{role.title}</strong>
                                                <ul className="list">
                                                    {role.items.map((item, idx) => (
                                                        <li key={idx}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </section>

                                    <section className="modal-section">
                                        <h5 className="modal-section-title">핵심 기능</h5>

                                        <ul className="feature-list">
                                            {project.proImg?.map((f, i) => (
                                                <li className="feature-item" key={i}>
                                                    <div className="feature-img-wrapper">
                                                        <img src={f.img} alt={f.title} />
                                                    </div>

                                                    <div className="feature-text">
                                                        <h6 className="feature-title">{f.title}</h6>
                                                        {f.content.map((item) => (
                                                            <ul>
                                                                <li key={item} className="feature-content">
                                                                    {item}
                                                                </li>
                                                            </ul>
                                                        ))}
                                                        <h6 className="feature-title plan">설계 의도</h6>
                                                        {f.plan.map((item) => (
                                                            <ul>
                                                                <li key={item} className="feature-content">
                                                                    {item}
                                                                </li>
                                                            </ul>
                                                        ))}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>

                                    <section className="modal-section">
                                        <h5 className="modal-section-title">문제점 및 해결</h5>

                                        <div className="trouble-box">
                                            <div className="trouble-problem">
                                                <span className="label problem">문제점</span>
                                                <ul>
                                                    {project.trouble.problem.map((p) => (
                                                        <li>{p}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="trouble-solution">
                                                <span className="label solution">해결방법</span>
                                                <ul>
                                                    {project.trouble.solution.map((s) => (
                                                        <li>{s}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="trouble-improvement">
                                                <span className="label improvement">향후 개선안</span>
                                                <ul>
                                                    {project.trouble.improvement.map((i) => (
                                                        <li>{i}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </ModalBody>

                            <ModalFooter>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ marginRight: "auto" }}>
                                    자세히 보기 →
                                </a>

                                <Button color="secondary" onClick={() => setOpen(false)}>
                                    닫기
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </Modal>
            </div>
        </div>
    );
}
