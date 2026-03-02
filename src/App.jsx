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
                problem:
                    "QueryDSL로 해당 전문가에 대한 리뷰와 경력 데이터를 조회할 때 카디널리티 곱 문제가 발생했습니다. 조인을 하면서 예상보다 훨씬 많은 데이터가 조회되어, 평균 평점이나 총 경력 계산이 정확하지 않았습니다.",
                solution:
                    "각 테이블의 PK를 기준으로 PK에 대한 countDistinct() 집계함수를 적용해 중복 레코드를 제거했으며, 이를 통해 조인으로 인한 데이터 중복 문제를 해결하고 평균 평점과 경력 합계가 예상과 일치하도록 개선했습니다.",
            },

            mainPage: "/portfolio/projects/zipddakMain.png",

            proImg: [
                {
                    title: "견적 요청",
                    img: "/portfolio/projects/zipddakRequest.png",
                    content: [
                        "수리·인테리어·컨설팅별 맞춤 질문 세트를 프론트에 구성하고, 사용자 답변에 따라 다음 질문이 결정되는 동적 UI 구현",
                        "useState 내 단일 객체에 각 단계의 답변을 실시간 업데이트 하며, 최종 제출 시 누적된 데이터를 요청서 테이블에 일괄 저장",
                        "작성 중 페이지 이탈 시 상태값을 즉시 초기화하여, 새로운 견적 요청 시 발생 할 수 있는 데이터 혼선 및 오염 방지",
                    ],
                },
                {
                    title: "장바구니",
                    img: "/portfolio/projects/zipddakCart.png",
                    content: [
                        "브랜드별 상품 자동 분류 및 동일 상품 중복 추가 시 수량 합산 로직을 통한 사용자 편의성 향상",
                        "백엔드 상품 데이터를 브랜드 단위로 그룹화하여 주문 정보의 가독성을 높인 장바구니 UI 구현",
                        "상품 유형(묶음/개별)에 따른 배송비 산출 알고리즘 및 총 결제 금액 자동 계산 기능 적용",
                    ],
                },
                {
                    title: "자재구매",
                    img: "/portfolio/projects/zipddakPayment.png",
                    content: [
                        "Toss Payments API 연동을 통해 다양한 결제 수단을 지원하고 안정적인 결제 승인 프로세스 구현",
                        "결제 금액 변조를 차단하기 위해 프론트 데이터가 아닌 DB의 상품 정보를 직접 참조하여 최종 금액 산출 및 검증",
                        "결제 승인 완료 시 주문 데이터를 DB에 저장하고 사용자에게 실시간 결제 완료 결과 반환",
                    ],
                },
                {
                    title: "관리자 페이지 통계",
                    img: "/portfolio/projects/zipddakAdmin.png",
                    content: [
                        "Chart.js를 활용하여 전월 대비 매출 및 회원 수 변동 지표를 그래프로 시각화한 관리자 대시보드 구축",
                        "매월 1일 0시 10분에 실행되는 자동 정산 스케줄러를 구현하여 정산 업무의 정확성 및 사용자 편의성 향상",
                        "서비스의 전반적인 수익 구조와 사용자 지표를 실시간 데이터 기반으로 분석할 수 있는 통합 관리 기능 제공",
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
                problem:
                    "프로젝트에서 사이트 관리자가 병원 신청 정보를 확인할 때 첨부된 사업자등록증(PDF) 을 화면에 표시해야 했습니다. 이를 위해 처음에는 pdf.js 외부 라이브러리를 사용해 PDF를 이미지 형태로 렌더링하려고 했지만, 렌더링 오류로 인해 정상적으로 구현되지 않는 문제가 있었습니다.",
                solution:
                    "이 문제를 해결하기 위해 복잡한 렌더링 방식을 대신해 HTML의 <iframe> 태그를 활용하는 방법으로 전환했습니다. 브라우저에서 기본 제공하는 PDF 뷰어를 그대로 사용할 수 있어, 화면에서 바로 PDF를 확인할 수 있을 뿐만 아니라 다운로드 기능까지 자연스럽게 제공할 수 있었습니다.",
            },

            mainPage: "/portfolio/projects/ieumMain.png",

            proImg: [
                {
                    title: "진단서 작성",
                    img: "/portfolio/projects/ieumWrite.png",
                    content: [
                        "환자의 고유 번호를 기반으로 과거의 모든 진료 기록을 데이터베이스에서 조회하여 화면 내 실시간 연동, 의료진이 환자의 병력을 즉각 파악하여 진료의 연속성을 유지할 수 있도록 기능 구현",
                        "환자의 개인정보 공개 설정 여부를 실시간 확인하여, '공유 동의' 시에만 환자가 작성한 상세 심리 데이터를 화면에 출력, 환자의 프라이버시를 보호하면서 진료에 필요한 주관적 지표를 선택적으로 참고할 수 있도록 구현",
                        "진료 진행 상태에 따른 조건부 편집 기능을 구현하여, '진료중' 단계에서는 자유로운 수정을 지원하고 '진료완료' 시에는 데이터 수정을 즉시 차단함으로써 기록의 신뢰성과 무결성 확보",
                    ],
                },
                {
                    title: "과거 진단 기록",
                    img: "/portfolio/projects/ieumHistory.png",
                    content: [
                        "과거 진단 기록 조회 시, 의료진 본인이 직접 작성한 진단서만 노출되도록 데이터 접근 권한 필터링을 적용하여 환자 정보의 보안성과 진료 기록의 책임성 강화",
                        "진료 날짜 및 특정 키워드를 활용한 다중 검색 필터를 구현하여, 방대한 과거 기록 중 필요한 데이터를 신속하게 추적하고 환자의 상세 정보를 즉각 확인할 수 있도록 구성",
                        "선택한 환자의 고유 식별자를 통해 기본 인적 사항과 과거 병력을 동시에 시각화함으로써, 진단서 작성 시 참고할 수 있는 데이터 가독성 및 진료 효율성 극대화",
                    ],
                },
                {
                    title: "병원 제휴 심사",
                    img: "/portfolio/projects/ieumAuth.png",
                    content: [
                        "회원/비회원 구분 없이 접근 가능한 개방형 제휴 신청 페이지를 구성하고, 병원 기본 정보와 함게 사업자등록번호 및 PDF 증빙 서류를 업로드할 수 있도록 멀티파트 데이터 수신 로직 구현",
                        "관리자의 승인 처리에 따라 Google SMTP 서버와 연동하여 신청 이메일로 병원별 고유 인증 코드를 자동 발송, 이를 통해 승인된 병원에 한해서만 후속 절차를 진행할 수 있도록 보안 연계",
                        "병원 관리자 회원가입 시 발급된 고유 코드를 필수 입력 값으로 설정하여, 사전 승인되지 않은 사용자의 가입을 원천 차단하고 병원 데이터의 신뢰성과 접근 권한 엄격히 관리",
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
                problem:
                    "JPA에 대한 이해가 충분하지 않아, 엔티티를 조회할 때 연관된 엔티티까지 무한으로 조회되는 무한 참조 문제가 발생했습니다. 이로 인해 데이터 처리 오류가 발생했고, 초기에는 문제의 원인을 정확히 파악하는 데 어려움이 있었습니다.",
                solution:
                    "이 문제를 해결하기 위해 엔티티 간 연관관계를 정확히 이해하고, 필요에 따라 fetch 전략을 조정하고, 연관관계 방향을 설정하며, DTO로 변환하는 방법을 적용했습니다. 특히 DTO 변환을 통해 무한 참조 문제를 해결할 수 있었고, 이 과정을 통해 JPA의 연관관계와 데이터 조회 방식에 대한 이해를 할 수 있었습니다.",
            },

            mainPage: "/portfolio/projects/jmoveMain.png",
            proImg: [
                {
                    title: "로그인",
                    img: "/portfolio/projects/jmoveLogin.png",
                    content: [
                        "아이디 및 비밀번호 찾기 기능을 통해 사용자 본인 확인 후 계정 정보를 조회하거나 비밀번호를 재설정하는 로직 구현, 간결한 회원가입 인터페이스를 구성하여 신규 사용자 유입 편의성 강화",
                        "카카오, 네이버, 구글의 인증 API를 개별 연동하여 일반 로그인 외에도 다양한 소셜 계정을 통한 간편 로그인 서비스 제공",
                    ],
                },
                {
                    title: "영화정보",
                    img: "/portfolio/projects/jmoveMovie.png",
                    content: [
                        "TMDB API를 비동기 방식으로 연동하여 영화별 줄거리, 평점, 포스터 이미지 등 방대한 상세 데이터를 실시간으로 호출 및 수집",
                        "고화질 포스터와 상세 메타데이터가 화면에 자연스럽게 노출되도록 배치하고, 사용자가 선택한 영화 정보를 별도의 새로고침 없이 즉시 확인할 수 있도록 구성",
                    ],
                },
                {
                    title: "영화검색",
                    img: "/portfolio/projects/jmoveSearch.png",
                    content: [
                        "사용자가 입력한 검색어를 바탕으로 외부 데이터베이스 내 수많은 영화 정보를 실시간으로 조회하여, 일치하는 결과를 즉각적으로 화면에 출력",
                        "페이지 전체를 새로고침 하지 않고도 검색 결과만 동적으로 갱신하는 비동기 처리를 적용하여, 검색 과정에서의 끊김 없는 사용자 경험 제공",
                    ],
                },
                {
                    title: "북마크",
                    img: "/portfolio/projects/jmoveMypage.png",
                    content: [
                        "사용자별 고유 계정과 연동된 별도의 북마크 관리 페이지를 제공하여, 관심 있는 영화나 정보를 한곳에서 효율적으로 분류하고 관리할 수 있도록 구현",
                        "사용자와 영화가 서로 복잡하게 얽히는 구조를 해결하기 위해, 그 사이에 Favorite이라는 중간 관계자를 배치. 이를 통해 데이터가 꼬이지 않도록 명확하게 일대다(1:N) 관계로 정리하여 관리의 편의성 확보.",
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
                problem:
                    "로그인, 아이디 찾기, 비밀번호 찾기 모달창이 각각 존재하는데, 다른 모달창으로 이동한 뒤 다시 돌아오면 이전에 입력한 값이 그대로 남아 있었습니다. 이를 방지하기 위해 다른 모달창으로 넘어가기 전에 입력 내용을 초기화하려고 했지만, 이동 과정에서 해당 요소를 찾을 수 없다는 오류가 발생했습니다.",
                solution:
                    "이를 해결하기 위해 입력값을 비우는 시점을 바꿨습니다. 즉, 모달창을 닫을 때가 아니라 모달창을 열 때마다 입력값을 초기화하도록 변경했습니다. 이렇게 하자 모달을 열 때 항상 초기 상태로 시작할 수 있어, 이전에 입력했던 값이 남아 있는 문제를 자연스럽게 해결할 수 있었습니다.",
            },

            mainPage: "/portfolio/projects/wheelMain.png",

            proImg: [
                {
                    title: "로그인",
                    img: "/portfolio/projects/wheelLogin.png",
                    content: [
                        "브라우저 쿠키를 활용하여 사용자 계정 정보를 안전하게 보관함으로써, 재방문 시 매번 아이디를 입력해야 하는 번거로움을 줄여 접근 편의성 개선",
                        "간편 소셜 로그인을 지원하되, 신규 가입 시에는 서비스 운영에 필요한 추가 정보 입력 페이지로 유도하여 소셜 계정의 간결함과 서비스 맞춤형 데이터 수집을 동시에 충족",
                        "가입 전 이메일 사용 여부를 실시간으로 선행 판단하여 중복 가입을 방지하고, Google SMTP 서버를 연동한 인증 코드 전송 및 검증 로직을 구축하여 계정의 신뢰성 확보",
                    ],
                },
                {
                    title: "아이디/비밀번호찾기",
                    img: "/portfolio/projects/wheelFind.png",
                    content: [
                        "가입 유형에 따른 맞춤형 가이드를 제공하여 소셜 로그인 시 연동된 플랫폼 정보를 안내함으로 사용자의 혼란을 방지, 일반 로그인인 경우 비밀번호 재설정을 통해 비밀번호가 없는 소셜 계정 특성을 고려하여, 계정 찾기 시 사용자가 가입한 플랫폼(Kakao, Naver, Google 등) 정보를 식별해 안내, 이를 통해 사용자가 겪을 수 있는 혼란을 방지하고 정확한 로그인 경로를 제시",
                        "일반 회원의 경우, 본인 인증 완료 후 즉시 새로운 비밀번호를 입력할 수 있는 재설정 창을 생성, 기존 비밀번호를 몰라도 안전하게 계정을 보구할 수 있는 서비스 편의성 제공",
                        "비밀번호 재설정 전, Google SMTP를 통해 이메일로 인증 코드를 발송하고 검증하는 절차를 거쳐 타인에 의한 무단 변경을 방지하고 계정 보안을 강화",
                    ],
                },
                {
                    title: "관심상품/장바구니",
                    img: "/portfolio/projects/wheelCart.png",
                    content: [
                        "상품의 특성(일반 구매 또는 기간제 대여)을 식별하여 각각의 속성에 맞는 장바구니 담기 프로세스를 적용, 상품 유형별로 필요한 데이터(대여 기간 등)를 개별적으로 관리하여 데이터 처리의 정확성 확보",
                        "사용자가 장바구니 목록 내에서 특정 상품들만 선택하여 삭제할 수 있는 기능을 구현, 삭제 시 데이터베이스와 실시간으로 동기화하여 장바구니 목록의 최신 상태 유지",
                        "사용자가 체크박스로 선택한 상품들과 각 수량을 실시간으로 연산하여 총 결제 예정 금액을 즉시 도출, 특히 대여와 구매 상품이 혼합된 상황에서도 정확한 금액 계산이 이루어지도록 로직 구축",
                    ],
                },
                {
                    title: "1:1 채팅",
                    img: "/portfolio/projects/wheelChat.png",
                    content: [
                        "Spring의 기본 WebSocket 설정을 기반으로 양방향 통신 환경을 구축, 사용자와 관리자 간의 1:1 상담 및 알림 메시지를 새로고침 없이 실시간으로 전달",
                        "관리자 대시보드 내에서 '읽지 않은 채팅'을 최상단에 배치하는 동적 정렬 로직을 구현하여 즉각적인 응대가 가능하도록 설계. 도한, 상대방의 메시지 확인 여부를 실시간으로 추적하여 '읽음/읽지 않음' 상태를 관리",
                        "카카오톡과 같은 '읽지 않은 메시지 수' 기능을 구현, 사용자가 확인하지 않은 메시지 수량을 실시간으로 집계하여 배지 형태로 노출함으로써 사용자 참여도를 높이고 직관적인 화면 제공",
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
                problem:
                    "저희 프로젝트의 주제는 쇼핑몰이었지만, 팀원들과 목표가 달라 어려움이 있었습니다. 팀원들은 게시판 기능을 각자 구현하고자 했고, 저는 프로젝트 주제에 맞는 쇼핑 관련 기능 개발이 필요하다고 생각했습니다. 이 때문에 프로젝트 초기에는 각자의 목표와 우선순위가 달라 방향성을 맞추는 데 어려움이 있었습니다.",
                solution:
                    "이를 해결하기 위해 팀원들과 역할 분담에 대해 충분히 논의했습니다. 그 결과, 저는 쇼핑몰의 핵심 기능 개발을 맡아 집중할 수 있었고, 팀원으로부터 게시판의 일부 페이징 코드를 공유받아 활용함으로써 프로젝트 기간 내에 기능을 구현할 수 있었습니다.",
            },

            mainPage: "/portfolio/projects/seedMain.png",

            proImg: [
                {
                    title: "상품 검색",
                    img: "/portfolio/projects/seedSearch.png",
                    content: [
                        "사용자가 입력한 검색어와 상품명을 비교하여 가장 적합한 결과를 데이터베이스에서 실시간으로 추출하고 화면에 즉시 노출",
                        "일치하는 상품이 없을 경우, 텅 빈 화면 대신 사용자에게 검색 결과가 없음을 친절하게 알리는 전용 안내페이지를 노출하여 이탈률 방지",
                        "높은/낮은 가격순 등 사용자가 선택한 기준에 따라 목록을 재정렬, 비동기 통신을 적용하여 페이지 새로고침 없이 빠른 상품 리스트 업데이트 제공",
                    ],
                },
                {
                    title: "상품 등록",
                    img: "/portfolio/projects/seedAdd.png",
                    content: [
                        "관리자가 신규 상품 정보를 효율적으로 입력하고 데이터베이스에 안정하게 저장할 수 있는 전용 관리 시스템 구현",
                        "등록된 데이터가 즉시 데이터베이스에 영속화되어, 일반 사용자가 화면을 새로고침 하는 즉시 최신 상품 정보를 확인할 수 있는 환경 구축",
                    ],
                },
                {
                    title: "상품 품절 및 판매 관리",
                    img: "/portfolio/projects/seedEnd.png",
                    content: [
                        "상품의 상태를 '판매 중' 또는 '품절' 로 전환하는 관리 로직을 구현, 상태 값에 따라 사용자 상품 리스트에 포함하거나 제외하는 동적 필터링 적용",
                        "판매 중지로 전환되었던 상품을 다시 '판매 중' 으로 변경 시, 별도의 복잡한 절차 없이 즉시 상품 리스트에 다시 노출되도록 구현하여 운영 효율성 확보",
                    ],
                },
                {
                    title: "장바구니",
                    img: "/portfolio/projects/seedCart.png",
                    content: [
                        "상품 목록 페이지와 상세 페이지 등 어느 화면에서도 원하는 상품을 즉시 장바구니에 담을 수 있도록 인터페이스를 다각화 하여 사용자 쇼핑 동선 최적화",
                        "장바구니 내에서 개별 상품의 수량을 자유롭게 조절하고, 특정 상품만 선택/해제 할 수 있는 기능을 제공, 데이터 변경 시 즉각적으로 상태가 반영되도록 구현",
                        "사용자가 선택한 상품의 가격과 수량을 실시간으로 연산하여 총 결제 예정 금액을 즉시 산출, 페이지 새로고침 없이도 선택 변경에 따라 금액이 유동적으로 변화하는 인터페이스 제공",
                    ],
                },
                {
                    title: "문의 게시판",
                    img: "/portfolio/projects/seedWrite.png",
                    content: [
                        "사용자가 직접 의견을 나누고 정보를 공유할 수 있도록 게시글과 댓글의 작성·조회·수정·삭제 기능을 구현",
                        "게시글의 인기도를 가늠할 수 있는 좋아요 기능과 실시간 조회수 집계 로직을 적용하여 게시판 내 사용자 활동을 수치화",
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
                                                        {f.content.map((item) => {
                                                            console.log(item);
                                                            return (
                                                                <ul>
                                                                    <li key={item} className="feature-content">
                                                                        {item}
                                                                    </li>
                                                                </ul>
                                                            );
                                                        })}
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
                                                <p>{project.trouble.problem}</p>
                                            </div>

                                            <div className="trouble-solution">
                                                <span className="label solution">해결방법</span>
                                                <p>{project.trouble.solution}</p>
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
