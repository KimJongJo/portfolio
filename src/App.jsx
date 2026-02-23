import { useState } from "react";
import profile from "./assets/profile.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  FaUser,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

export default function App() {
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState(null);

  const projects = [
    {
      title: "집딱",
      summary: "수리·인테리어 전 과정을 한 번에 제공하는 통합 플랫폼 서비스",
      tech: [
        "springboot",
        "springsecurity",
        "jwt",
        "jpa",
        "querydsl",
        "mariadb",
        "react",
      ],
      detail:
        "일반 사용자와 전문가를 매칭하고 견적 요청 및 관리를 할 수 있는 플랫폼입니다.",
      github: "https://github.com/KimJongJo/zipDDak",
      image: "/portfolio/logos/zipddak.png",

      // 상세보기에 대한 데이터
      period: "2025.11 ~ 2025.12",
      teamSize: 4,
      solo: false,
      award: "최우수상",
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
      proImg: [
        {
          title: "메인화면",
          img: "/portfolio/projects/zipddakMain.png",
          content:
            "통합 검색 기능을 중심으로 전문가, 자재, 공구 등 카테고리별 추천 상품을 노출하여 사용자 탐색 편의성 강화",
        },
        {
          title: "견적 요청",
          img: "/portfolio/projects/zipddakRequest.png",
          content:
            "수리, 인테리어, 컨설팅 서비스 유형별 맞춤 질문 세트를 구성하고, 대화형 UI를 통한 상세 견적 요청서 작성 기능 구현",
        },
        {
          title: "장바구니",
          img: "/portfolio/projects/zipddakCart.png",
          content:
            "브랜드별 상품 자동 분류 및 동일 상품 중복 추가 시 수량 합산, 배송비 자동 산출 로직 적용",
        },
        {
          title: "자재구매",
          img: "/portfolio/projects/zipddakPayment.png",
          content:
            "Toss Payments API 연동을 통해 다양한 결제 수단을 지원하고, 결제 승인 및 취소 등 주문 라이프사이클 관리",
        },
        {
          title: "관리자 페이지 통계",
          img: "/portfolio/projects/zipddakAdmin.png",
          content:
            "전월 대비 매출 비교 및 월별 수익 구조, 회원 수 변동 지표를 한눈에 파악할 수 있는 데이터 시각화 대시보드 구축",
        },
      ],
    },
    {
      title: "건강이음",
      summary:
        "정신건강 자가테스트와 병원 예약·진료를 제공하는 정신건강 플랫폼 서비스",
      tech: ["springboot", "mybatis", "mariadb", "servletjsp", "jquery"],
      detail:
        "게시글 작성, 댓글, 좋아요 기능을 포함한 커뮤니티 웹 서비스입니다.",
      github: "https://github.com/KimJongJo/ieum",
      image: "/portfolio/logos/ieum.png",

      // 상세보기에 대한 데이터
      period: "2025.08 ~ 2025.10",
      teamSize: 4,
      solo: false,
      award: "최우수상",
      roles: [
        {
          title: "사용자 서비스 및 인증 개발",
          items: [
            "OAuth 기반 소셜 로그인 및 기존 계정 이력 확인을 통한 계정 병합 로직 처리",
            "병원 상세 정보 수정 및 실시간 반영 기능 구현",
          ],
        },
        {
          title: "병원/진료 관리 기능 구축",
          items: [
            "진료 내용을 바탕으로 한 전자 진단서 작성 및 히스토리 관리 시스템 개발",
            "내원 환자의 과거 진료 이력 조회 및 작성자 중심의 진단서 열람 권한 제어",
          ],
        },
        {
          title: "운영 관리자 기능 개발",
          items: [
            "사용자 활동 상태 변경 및 전체 회원 정보 관리 기능 구현",
            "병원 입점 신청 현황 모니터링 및 심사·승인 프로세스 구축",
          ],
        },
      ],

      trouble: {
        problem:
          "프로젝트에서 사이트 관리자가 병원 신청 정보를 확인할 때 첨부된 사업자등록증(PDF) 을 화면에 표시해야 했습니다. 이를 위해 처음에는 pdf.js 외부 라이브러리를 사용해 PDF를 이미지 형태로 렌더링하려고 했지만, 렌더링 오류로 인해 정상적으로 구현되지 않는 문제가 있었습니다.",
        solution:
          "이 문제를 해결하기 위해 복잡한 렌더링 방식을 대신해 HTML의 <iframe> 태그를 활용하는 방법으로 전환했습니다. 브라우저에서 기본 제공하는 PDF 뷰어를 그대로 사용할 수 있어, 화면에서 바로 PDF를 확인할 수 있을 뿐만 아니라 다운로드 기능까지 자연스럽게 제공할 수 있었습니다.",
      },
      proImg: [
        {
          title: "메인화면",
          img: "/portfolio/projects/ieumMain.png",
          content:
            "자가진단, 병원 찾기, 커뮤니티 등 주요 서비스로의 접근성을 높이기 위해 직관적인 사용자 인터페이스 기반 통합 엔트리 구축",
        },
        {
          title: "진단서 작성",
          img: "/portfolio/projects/ieumWrite.png",
          content:
            "환자의 과거 진료 히스토리 데이터를 실시간으로 연동하여 의료진이 연속성 있는 진단 내용을 작성할 수 있도록 기능 구현",
        },
        {
          title: "과거 진단 기록",
          img: "/portfolio/projects/ieumHistory.png",
          content:
            "정보 보안 및 개인정보 보호를 위해 의료진 본인이 직접 작성한 진단 데이터에 대해서만 접근 가능한 필터링 로직 적용",
        },
        {
          title: "병원 제휴 심사",
          img: "/portfolio/projects/ieumAuth.png",
          content:
            "사업자등록증 검토 등 증빙 서류 기반의 검증 단계를 설계하여, 신규 병원 입점 신청에 대한 승인 및 반려 워크플로우 구축",
        },
      ],
    },
    // {
    //     title: "AI 면접관",
    //     summary: "GPT API 기반 이력서 연계 모의 면접 서비스",
    //     tech: ["springboot", "react", "GPT_API"],
    //     detail: "이력서를 기반으로 질문을 생성하고 사용자의 답변에 대해 피드백을 제공하는 서비스입니다.",
    //     github: "https://github.com/KimJongJo/Aiinterview",
    //     image: "/portfolio/logos/aiInterview.png",

    //     // 상세 보기에 대한 데이터
    //     period: "2025.05 ~ 2025.06",
    //     teamSize: 1,
    //     solo: true,
    //     roles: [
    //         {
    //             title: "회원 서비스 개발",
    //             items: ["커뮤니티 게시판", "자재 구매 / 장바구니", "견적 요청 UI"],
    //         },
    //         {
    //             title: "관리자 페이지 핵심 기능 개발",
    //             items: ["회원 및 전문가 관리", "업체 입점 / 정산 / 통계 관리"],
    //         },
    //     ],

    //     trouble: {
    //         problem:
    //             "QueryDSL로 해당 전문가에 대한 리뷰와 경력 데이터를 조회할 때 카디널리티 곱 문제가 발생했습니다. 조인을 하면서 예상보다 훨씬 많은 데이터가 조회되어, 평균 평점이나 총 경력 계산이 정확하지 않았습니다.",
    //         solution:
    //             "각 테이블의 PK를 기준으로 PK에 대한 countDistinct() 집계함수를 적용해 중복 레코드를 제거했으며, 이를 통해 조인으로 인한 데이터 중복 문제를 해결하고 평균 평점과 경력 합계가 예상과 일치하도록 개선했습니다.",
    //     },
    //     proImg: [
    //         {
    //             title: "메인화면",
    //             img: "/portfolio/projects/zipddakMain.png",
    //             content: "통합검색을 중심으로 전문가·자재·공구를 추천하여 빠른 탐색 지원",
    //         },
    //         {
    //             title: "견적 요청",
    //             img: "/portfolio/projects/zipddakRequest.png",
    //             content: "수리·인테리어·컨설팅 유형에 따라 맞춤 질문 기반 견적 요청서 작성",
    //         },
    //         {
    //             title: "장바구니",
    //             img: "/portfolio/projects/zipddakCart.png",
    //             content: "브랜드별 상품 분류 및 동일 상품 수량 자동 증가, 배송비 자동 계산",
    //         },
    //         {
    //             title: "자재구매",
    //             img: "/portfolio/projects/zipddakPayment.png",
    //             content: "Toss Payments API 연동으로 다양한 결제수단 제공",
    //         },
    //         {
    //             title: "관리자 페이지 통계",
    //             img: "/portfolio/projects/zipddakAdmin.png",
    //             content: "전월 대비 매칠 비교를 통해 수익구조, 회원 수, 월별 매출 현황 확인",
    //         },
    //     ],
    // },
    {
      title: "JMove",
      summary: "TMDB API 기반 영화 탐색 및 정보 제공 웹 서비스",
      tech: [
        "springboot",
        "springsecurity",
        "jwt",
        "jpa",
        "oracle",
        "react",
        "TMDB_API",
      ],
      detail:
        "사용자 취향에 맞는 영화를 추천하고 상세 정보를 제공하는 서비스입니다.",
      github: "https://github.com/KimJongJo/JMove",
      image: "/portfolio/logos/jmove.png",

      // 상세 보기에 대한 데이터
      period: "2025.01 ~ 2025.02",
      teamSize: 1,
      solo: true,
      roles: [
        {
          title: "영화 데이터 연동 및 조회",
          items: [
            "TMDB API 연동을 통한 인기·최신 영화 및 장르별 맞춤 목록 구현",
            "검색어 기반 데이터 필터링 및 관련 영화 리스트 조회 기능 개발",
            "영화별 상세 정보(줄거리, 개봉일, 평점 등) 노출 및 상세 페이지 구축",
          ],
        },
        {
          title: "사용자 편의 기능",
          items: [
            "북마크 기능을 통한 관심 영화 등록/해제 및 마이페이지 내 저장 목록 관리",
            "OAuth 소셜 로그인 연동 및 최초 로그인 시 자동 가입·세션 관리 구현",
          ],
        },
      ],

      trouble: {
        problem:
          "JPA에 대한 이해가 충분하지 않아, 엔티티를 조회할 때 연관된 엔티티까지 무한으로 조회되는 무한 참조 문제가 발생했습니다. 이로 인해 데이터 처리 오류가 발생했고, 초기에는 문제의 원인을 정확히 파악하는 데 어려움이 있었습니다.",
        solution:
          "이 문제를 해결하기 위해 엔티티 간 연관관계를 정확히 이해하고, 필요에 따라 fetch 전략을 조정하고, 연관관계 방향을 설정하며, DTO로 변환하는 방법을 적용했습니다. 특히 DTO 변환을 통해 무한 참조 문제를 해결할 수 있었고, 이 과정을 통해 JPA의 연관관계와 데이터 조회 방식에 대한 이해를 할 수 있었습니다.",
      },
      proImg: [
        {
          title: "메인화면",
          img: "/portfolio/projects/jmoveMain.png",
          content:
            "프로젝트 핵심 소개와 함께 슬라이드 UI를 적용하여 실시간 인기 영화 목록을 시각적으로 노출하는 큐레이션 기능 구현",
        },
        {
          title: "로그인",
          img: "/portfolio/projects/jmoveLogin.png",
          content:
            "OAuth 소셜 로그인 연동으로 인증 절차를 간소화하고, 최초 로그인 시 사용자 정보 자동 저장 및 세션 관리 로직 적용",
        },
        {
          title: "영화정보",
          img: "/portfolio/projects/jmoveMovie.png",
          content:
            "외부 API 연동을 통해 영화별 줄거리, 평점, 포스터 등 상세 메타데이터를 수집하여 사용자에게 최적화된 상세 정보 노출",
        },
        {
          title: "영화검색",
          img: "/portfolio/projects/jmoveSearch.png",
          content:
            "검색 키워드 기반의 실시간 데이터 필터링을 구현하고, 조건에 따른 영화 리스트 조회 및 검색 결과 처리 시스템 구축",
        },
        {
          title: "북마크",
          img: "/portfolio/projects/jmoveMypage.png",
          content:
            "사용자별 관심 영화 북마크 기능을 구현하여, 개인별 즐겨찾기 목록을 별도 페이지에서 관리할 수 있는 환경 제공",
        },
      ],
    },

    {
      title: "휠링캠프",
      summary:
        "여행지 추천과 여행 물품 구매·대여를 제공하는 여행 플랫폼 서비스",
      tech: [
        "springboot",
        "springsecurity",
        "mybatis",
        "mariadb",
        "oracle",
        "react",
        "jquery",
      ],
      detail: "개인 소개와 프로젝트를 정리한 원페이지 포트폴리오 사이트입니다.",
      github: "https://github.com/KimJongJo/WheelingCamp",
      image: "/portfolio/logos/wheelingCamp.png",

      // 상세 보기에 대한 데이터
      period: "2024.05 ~ 2024.06",
      teamSize: 6,
      solo: false,
      roles: [
        {
          title: "실시간 채팅 시스템",
          items: [
            "회원-관리자 간 실시간 메시징 기능 및 메시지 수신 알림 구현",
            "읽지 않은 메시지 카운트 표시 기능을 통한 응답 환경 구축",
          ],
        },
        {
          title: "사용자 인증 및 계정 관리",
          items: [
            "OAuth 기반 소셜 로그인 연동으로 회원가입 및 인증 프로세스 간소화",
            "아이디/비밀번호 찾기 등 사용자 계정 복구 및 관리 기능 구현",
          ],
        },
        {
          title: "쇼핑 편의 기능",
          items: [
            "다중 상품 일괄 결제를 위한 장바구니 시스템 및 관심상품(즐겨찾기) 기능 개발",
            "관심 상품 저장을 통함 사용자 재방문 및 구매 접근성 개선",
          ],
        },
      ],

      trouble: {
        problem:
          "로그인, 아이디 찾기, 비밀번호 찾기 모달창이 각각 존재하는데, 다른 모달창으로 이동한 뒤 다시 돌아오면 이전에 입력한 값이 그대로 남아 있었습니다. 이를 방지하기 위해 다른 모달창으로 넘어가기 전에 입력 내용을 초기화하려고 했지만, 이동 과정에서 해당 요소를 찾을 수 없다는 오류가 발생했습니다.",
        solution:
          "이를 해결하기 위해 입력값을 비우는 시점을 바꿨습니다. 즉, 모달창을 닫을 때가 아니라 모달창을 열 때마다 입력값을 초기화하도록 변경했습니다. 이렇게 하자 모달을 열 때 항상 초기 상태로 시작할 수 있어, 이전에 입력했던 값이 남아 있는 문제를 자연스럽게 해결할 수 있었습니다.",
      },
      proImg: [
        {
          title: "로그인",
          img: "/portfolio/projects/wheelLogin.png",
          content:
            "신규 및 기존 가입자 분기 처리를 통해 로그인·회원가입 로직을 구현하고, 이메일 중복 검사 및 추가 정보 입력 페이지 연동",
        },
        {
          title: "아이디/비밀번호찾기",
          img: "/portfolio/projects/wheelFind.png",
          content:
            "인증 데이터 기반의 회원 조회 기능을 구현하고, 일반 가입 아이디 노출 또는 소셜 로그인 방식 안내 등 맞춤 정보 제공",
        },
        {
          title: "관심상품/장바구니",
          img: "/portfolio/projects/wheelCart.png",
          content:
            "장바구니 내 선택 상품 삭제 및 실시간 결제 금액 계산 기능을 구현하고, 상품 유형(대여/구매)별 장바구니 담기 로직 적용",
        },
        {
          title: "1:1 채팅",
          img: "/portfolio/projects/wheelChat.png",
          content:
            "사용자용 실시간 채팅 및 알림 기능을 구축하고, 관리자 화면 내 읽지 않은 문의 최상단 정렬 및 실시간 읽음 처리 상태 관리",
        },
      ],
    },
    {
      title: "언더 더 씨",
      summary: "씨앗 구매와 커뮤니티 기능을 제공하는 씨앗 플랫폼 서비스",
      tech: [
        "springboot",
        "springsecurity",
        "mybatis",
        "servletjsp",
        "thymeleaf",
        "oracle",
      ],
      detail:
        "게시글 작성, 댓글, 좋아요 기능을 포함한 커뮤니티 웹 서비스입니다.",
      github: "https://github.com/KimJongJo/Seed",
      image: "/portfolio/logos/seed.png",

      // 상세 보기에 대한 데이터
      period: "2024.04 ~ 2024.05",
      teamSize: 3,
      solo: false,
      roles: [
        {
          title: "고객 상담 및 계정 관리",
          items: [
            "사용자 문의 접수 및 답변 처리를 위한 고객 상담 게시판 구현",
            "이메일 인증 기반의 계정 찾기 및 비밀번호 암호화 적용을 통한 보안 강화",
            "회원 자발적 계정 삭제를 위한 탈퇴 프로세스 및 데이터 처리 로직 구현",
          ],
        },
        {
          title: "상품 정보 및 쇼핑 기능",
          items: [
            "카테고리별 상품 목록 조회 및 상세 정보 노출 기능 개발",
            "다중 상품 보관 및 관리를 위한 장바구니 시스템 구축",
          ],
        },
        {
          title: "운영 관리자 기능",
          items: [
            "신규 상품 등록 및 상품 정보(가격, 이미지 등) 관리 기능 구현",
            "재고 상황에 따른 판매 상태(판매중/품절) 실시간 전환 시스템 구축",
          ],
        },
      ],

      trouble: {
        problem:
          "저희 프로젝트의 주제는 쇼핑몰이었지만, 팀원들과 목표가 달라 어려움이 있었습니다. 팀원들은 게시판 기능을 각자 구현하고자 했고, 저는 프로젝트 주제에 맞는 쇼핑 관련 기능 개발이 필요하다고 생각했습니다. 이 때문에 프로젝트 초기에는 각자의 목표와 우선순위가 달라 방향성을 맞추는 데 어려움이 있었습니다.",
        solution:
          "이를 해결하기 위해 팀원들과 역할 분담에 대해 충분히 논의했습니다. 그 결과, 저는 쇼핑몰의 핵심 기능 개발을 맡아 집중할 수 있었고, 팀원으로부터 게시판의 일부 페이징 코드를 공유받아 활용함으로써 프로젝트 기간 내에 기능을 구현할 수 있었습니다.",
      },
      proImg: [
        {
          title: "상품 검색",
          img: "/portfolio/projects/seedSearch.png",
          content:
            "키워드 기반의 실시간 상품 조회와 검색 결과 부재 시 예외 처리를 구현하고, 높은/낮은 가격순 및 카테고리별 정렬 필터 적용",
        },
        {
          title: "상품 등록",
          img: "/portfolio/projects/seedAdd.png",
          content:
            "관리자 전용 상품 관리 시스템을 구축하여 신규 상품 데이터 등록 및 실시간 메인 목록 반영 기능 구현",
        },
        {
          title: "상품 품절 및 판매 관리",
          img: "/portfolio/projects/seedEnd.png",
          content:
            "상품 상태(판매/품절)에 따른 목록 노출 제어 로직을 설계하여, 품절 처리 시 메인 화면 자동 제외 및 판매 재개 기능 적용",
        },
        {
          title: "장바구니",
          img: "/portfolio/projects/seedCart.png",
          content:
            "목록 및 상세 페이지 내 다중 진입로를 구축하고, 선택 상품별 수량 증감 및 체크 여부에 따른 실시간 결제 금액 산출 기능 구현",
        },
        {
          title: "문의 게시판",
          img: "/portfolio/projects/seedWrite.png",
          content:
            "게시글과 댓글의 생성·수정·삭제(CRUD) 기능을 구축하고, 조회수 집계 및 좋아요 등 사용자 상호작용 기능 구현",
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
            <a
              href={`${import.meta.env.BASE_URL}김종조이력서.pdf`}
              download
              className="outline"
            >
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
                    <a
                      href="https://github.com/KimJongJo"
                      target="_blank"
                      className="value link"
                    >
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
                <img
                  className="skill-imgs"
                  src="/portfolio/skillImgs/html.png"
                  alt="HTML"
                />
                <span className="tooltip">HTML</span>
              </div>

              <div className="skill-icon">
                <img
                  className="skill-imgs"
                  src="/portfolio/skillImgs/css.png"
                  alt="CSS"
                />
                <span className="tooltip">CSS</span>
              </div>

              <div className="skill-icon">
                <img
                  className="skill-imgs"
                  src="/portfolio/skillImgs/js.png"
                  alt="JavaScript"
                />
                <span className="tooltip">JavaScript</span>
              </div>

              <div className="skill-icon">
                <img
                  className="skill-imgs"
                  src="/portfolio/skillImgs/jquery.png"
                  alt="jQuery"
                />
                <span className="tooltip">jQuery</span>
              </div>

              <div className="skill-icon">
                <img
                  className="skill-imgs"
                  src="/portfolio/skillImgs/react.png"
                  alt="React"
                />
                <span className="tooltip">React</span>
              </div>
            </div>
            <ul className="skill-content">
              <li>
                React 컴포넌트 구조로 UI를 구성하고 서버 API와 연동합니다.
              </li>
              <li>
                Axios를 사용하여 비동기 통신을 처리하고, HTTP 상태 코드에 따른
                공통 예외 처리를 수행합니다.
              </li>
              <li>
                Jotai로 전역 상태를 관리하고 React Router로 SPA의 경로를
                제어합니다.
              </li>
            </ul>
          </div>

          <div className="skill-group">
            <h3>Backend</h3>

            <div className="skills">
              <div className="skill-icon">
                <img
                  className="skill-imgs"
                  src="/portfolio/skillImgs/java.png"
                  alt="HTML"
                />
                <span className="tooltip">Java</span>
              </div>

              <div className="skill-icon">
                <img
                  className="skill-imgs"
                  src="/portfolio/skillImgs/jsp.png"
                  alt="CSS"
                />
                <span className="tooltip">Servlet&Jsp</span>
              </div>

              <div className="skill-icon">
                <img
                  className="skill-imgs"
                  src="/portfolio/skillImgs/thymeleaf.png"
                  alt="JavaScript"
                />
                <span className="tooltip">Thymeleaf</span>
              </div>

              <div className="skill-icon">
                <img
                  className="skill-imgs"
                  src="/portfolio/skillImgs/springBoot.png"
                  alt="React"
                />
                <span className="tooltip">Spring Boot</span>
              </div>

              <div className="skill-icon">
                <img
                  className="skill-imgs"
                  src="/portfolio/skillImgs/security.png"
                  alt="React"
                />
                <span className="tooltip">Spring Security</span>
              </div>

              <div className="skill-icon">
                <img
                  className="skill-imgs"
                  src="/portfolio/skillImgs/jpa.png"
                  alt="React"
                />
                <span className="tooltip">JPA</span>
              </div>

              <div className="skill-icon">
                <img
                  className="skill-imgs"
                  src="/portfolio/skillImgs/queryDsl.png"
                  alt="React"
                />
                <span className="tooltip">QueryDSL</span>
              </div>

              <div className="skill-icon">
                <img
                  className="skill-imgs"
                  src="/portfolio/skillImgs/mybatis.png"
                  alt="React"
                />
                <span className="tooltip">Mybatis</span>
              </div>

              <div className="skill-icon">
                <img
                  className="skill-imgs"
                  src="/portfolio/skillImgs/jwt.png"
                  alt="React"
                />
                <span className="tooltip">JWT</span>
              </div>
            </div>
            <ul className="skill-content">
              <li>
                Java와 Spring Boot를 활용하여 API 서버를 구축하고 비즈니스
                로직을 구현합니다.
              </li>
              <li>
                Controller - Service - Repository 계층 분리를 적용하여 각
                레이어의 역할을 독립적으로 관리합니다.
              </li>
              <li>
                Thymeleaf와 JSP 템플릿 엔진을 사용하여 서버 사이드 화면을
                렌더링합니다.
              </li>
              <li>
                Spring Security와 JWT, OAuth2를 조합하여 토큰 기반의 사용자 인증
                및 권한 로직을 구현합니다.
              </li>
              <li>
                JPA(QueryDSL)및 MyBatis를 사용하여 DB 접근 객체를 구현하고 동적
                쿼리를 처리합니다.
              </li>
            </ul>
          </div>

          <div className="skill-group">
            <h3>Database</h3>
            <div className="skills">
              <div className="skill-icon">
                <img
                  className="skill-imgs"
                  src="/portfolio/skillImgs/oracle.png"
                  alt="HTML"
                />
                <span className="tooltip">Oracle</span>
              </div>

              <div className="skill-icon">
                <img
                  className="skill-imgs"
                  src="/portfolio/skillImgs/mysql.png"
                  alt="CSS"
                />
                <span className="tooltip">Mysql</span>
              </div>

              <div className="skill-icon">
                <img
                  className="skill-imgs"
                  src="/portfolio/skillImgs/mariaDB.png"
                  alt="JavaScript"
                />
                <span className="tooltip">mariaDB</span>
              </div>
            </div>
            <ul className="skill-content">
              <li>
                Oracle, MySQL, MariaDB를 사용하여 요구사항에 맞는 테이블을
                설계하고 ERD를 도출합니다.
              </li>
            </ul>
          </div>

          <div className="skill-group">
            <h3>Tools & Environment</h3>
            <div className="skills">
              <div className="skill-icon">
                <img
                  className="skill-imgs"
                  src="/portfolio/skillImgs/github.png"
                  alt="GitHub"
                />
                <span className="tooltip">GitHub</span>
              </div>

              <div className="skill-icon">
                <img
                  className="skill-imgs"
                  src="/portfolio/skillImgs/git.png"
                  alt="Git"
                />
                <span className="tooltip">Git</span>
              </div>

              <div className="skill-icon">
                <img
                  className="skill-imgs"
                  src="/portfolio/skillImgs/figma.png"
                  alt="Figma"
                />
                <span className="tooltip">Figma</span>
              </div>

              <div className="skill-icon">
                <img
                  className="skill-imgs"
                  src="/portfolio/skillImgs/postman.png"
                  alt="Postman"
                />
                <span className="tooltip">Postman</span>
              </div>

              <div className="skill-icon">
                <img
                  className="skill-imgs"
                  src="/portfolio/skillImgs/notion.png"
                  alt="Notion"
                />
                <span className="tooltip">Notion</span>
              </div>
            </div>
            <ul className="skill-content">
              <li>
                Eclipse, IntelliJ, VS Code를 활용하여 코드 작성 및 프로젝트
                개발을 진행합니다.
              </li>
              <li>
                Maven 및 Gradle을 사용하여 필요한 라이브러리를 관리하고
                프로젝트를 빌드합니다.
              </li>
              <li>
                Git과 GitHub로 소스 코드의 버전을 관리하며 팀 프로젝트에
                참여합니다.
              </li>
              <li>
                Figma, Postman, Notion을 활용하여 요구사항 정의서, ERD, 컴포넌트
                정의서 등 프로젝트 문서를 공유하고 기획 내용을 확인합니다.
              </li>
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
                    <img
                      style={{ width: "40px", height: "40px" }}
                      src={p.image}
                      alt=""
                    />
                    <div>{p.title}</div>
                  </h3>
                  <p>{p.summary}</p>
                </div>
                <div className="project-tech-icons">
                  {p.tech.map((t) => (
                    <div key={t} className="project-tech-icon-wrapper">
                      <img
                        src={techIcons[t]}
                        alt={t}
                        className="project-tech-icon"
                      />
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
          <a
            className="link"
            href="https://velog.io/@desk1614/posts"
            target="_blank"
          >
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
                  {project.award ? (
                    <span className="project-award">{project.award}</span>
                  ) : (
                    <></>
                  )}
                  <span
                    className={`project-badge ${
                      project.solo ? "solo" : "team"
                    }`}
                  >
                    {project.solo ? "개인 프로젝트" : "팀 프로젝트"}
                  </span>
                </div>
              </ModalHeader>

              <ModalBody>
                <div className="modal-body-div">
                  <div className="modal-subtitle">{project.summary}</div>

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
                            {f.content && (
                              <p className="feature-content">{f.content}</p>
                            )}
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
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: "auto" }}
                >
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
