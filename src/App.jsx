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
            github: "https://github.com/your-id/matching",
            image: "/about-me/logos/zipddak.png",
        },
        {
            title: "건강이음",
            summary: "정신건강 자가테스트와 병원 예약·진료를 제공하는 정신건강 플랫폼 서비스",
            tech: ["springboot", "mybatis", "mariadb", "servletjsp", "jquery"],
            detail: "게시글 작성, 댓글, 좋아요 기능을 포함한 커뮤니티 웹 서비스입니다.",
            github: "https://github.com/your-id/community",
            image: "/about-me/logos/ieum.png",
        },
        {
            title: "AI 면접관",
            summary: "GPT API 기반 이력서 연계 모의 면접 서비스",
            tech: ["springboot", "react", "GPT_API"],
            detail: "이력서를 기반으로 질문을 생성하고 사용자의 답변에 대해 피드백을 제공하는 서비스입니다.",
            github: "https://github.com/your-id/aiinterview",
            image: "/about-me/logos/aiInterview.png",
        },
        {
            title: "JMove",
            summary: "TMDB API 기반 영화 탐색 및 정보 제공 웹 서비스",
            tech: ["springboot", "springsecurity", "jwt", "jpa", "oracle", "react", "TMDB_API"],
            detail: "사용자 취향에 맞는 영화를 추천하고 상세 정보를 제공하는 서비스입니다.",
            github: "https://github.com/your-id/movie",
            image: "/about-me/logos/jmove.png",
        },

        {
            title: "휠링캠프",
            summary: "여행지 추천과 여행 물품 구매·대여를 제공하는 여행 플랫폼 서비스",
            tech: ["springboot", "springsecurity", "mybatis", "mariadb", "oracle", "react", "jquery"],
            detail: "개인 소개와 프로젝트를 정리한 원페이지 포트폴리오 사이트입니다.",
            github: "https://github.com/your-id/portfolio",
            image: "/about-me/logos/wheelingCamp.png",
        },
        {
            title: "언더 더 씨",
            summary: "씨앗 구매와 커뮤니티 기능을 제공하는 씨앗 플랫폼 서비스",
            tech: ["springboot", "springsecurity", "mybatis", "servletjsp", "thymeleaf", "oracle"],
            detail: "게시글 작성, 댓글, 좋아요 기능을 포함한 커뮤니티 웹 서비스입니다.",
            github: "https://github.com/your-id/community",
            image: "/about-me/logos/seed.png",
        },
    ];

    const techIcons = {
        // Frontend
        html: "/about-me/skillImgs/html.png",
        css: "/about-me/skillImgs/css.png",
        javascript: "/about-me/skillImgs/js.png",
        jquery: "/about-me/skillImgs/jquery.png",
        react: "/about-me/skillImgs/react.png",

        // Backend
        java: "/about-me/skillImgs/java.png",
        servletjsp: "/about-me/skillImgs/jsp.png",
        thymeleaf: "/about-me/skillImgs/thymeleaf.png",
        springboot: "/about-me/skillImgs/springBoot.png",
        springsecurity: "/about-me/skillImgs/security.png",
        jpa: "/about-me/skillImgs/jpa.png",
        querydsl: "/about-me/skillImgs/queryDsl.png",
        mybatis: "/about-me/skillImgs/mybatis.png",
        jwt: "/about-me/skillImgs/jwt.png",

        // Database
        oracle: "/about-me/skillImgs/oracle.png",
        mysql: "/about-me/skillImgs/mysql.png",
        mariadb: "/about-me/skillImgs/mariaDB.png",

        // Tools
        github: "/about-me/skillImgs/github.png",
        git: "/about-me/skillImgs/git.png",
        figma: "/about-me/skillImgs/figma.png",
        postman: "/about-me/skillImgs/postman.png",
        notion: "/about-me/skillImgs/notion.png",

        // External / API
        TMDB_API: "/about-me/skillImgs/TMDB_API.png",
        GPT_API: "/about-me/skillImgs/GPT_API.png",
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
                        <div>문제가 생기면 끝까지 남아 해결하려고 합니다.</div>
                        <div>에러를 그냥 넘기지 않고, 원인을 이해하려 합니다.</div>
                    </p>
                    <div className="buttons">
                        <a href="#projects">프로젝트 보기</a>
                        <a href={`${import.meta.env.BASE_URL}김종조이력서.pdf`} download className="outline">
                            📄 이력서 다운로드
                        </a>
                    </div>

                    <div className="contact-info-wrapper">
                        {/* 1번째 줄 */}
                        <div className="contact-row">
                            <div className="contact-item">
                                <FaUser size={20} />
                                <div className="contact-item-text">
                                    <span className="label">이름</span>
                                    <span className="value">김종조</span>
                                </div>
                            </div>

                            <div className="contact-item">
                                <FaCalendarAlt size={20} />
                                <div className="contact-item-text">
                                    <span className="label">생년월일</span>
                                    <span className="value">00.03.09</span>
                                </div>
                            </div>

                            <div className="contact-item">
                                <FaMapMarkerAlt size={20} />
                                <div className="contact-item-text">
                                    <span className="label">위치</span>
                                    <span className="value">서울특별시 중랑구</span>
                                </div>
                            </div>
                        </div>

                        {/* 2번째 줄 */}
                        <div className="contact-row">
                            <div className="contact-item">
                                <FaPhone size={20} />
                                <div className="contact-item-text">
                                    <span className="label">연락처</span>
                                    <span className="value">010-5270-8614</span>
                                </div>
                            </div>

                            <div className="contact-item">
                                <FaEnvelope size={20} />
                                <div className="contact-item-text">
                                    <span className="label">이메일</span>
                                    <span className="value">desk1614@gmail.com</span>
                                </div>
                            </div>

                            <div className="contact-item">
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
                </section>

                <section>
                    <h2>사용 기술</h2>

                    <div className="skill-group">
                        <h3>Frontend</h3>
                        <div className="skills">
                            <div className="skill-icon">
                                <img className="skill-imgs" src="/about-me/skillImgs/html.png" alt="HTML" />
                                <span className="tooltip">HTML</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/about-me/skillImgs/css.png" alt="CSS" />
                                <span className="tooltip">CSS</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/about-me/skillImgs/js.png" alt="JavaScript" />
                                <span className="tooltip">JavaScript</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/about-me/skillImgs/jquery.png" alt="jQuery" />
                                <span className="tooltip">jQuery</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/about-me/skillImgs/react.png" alt="React" />
                                <span className="tooltip">React</span>
                            </div>
                        </div>
                    </div>

                    <div className="skill-group">
                        <h3>Backend</h3>

                        <div className="skills">
                            <div className="skill-icon">
                                <img className="skill-imgs" src="/about-me/skillImgs/java.png" alt="HTML" />
                                <span className="tooltip">Java</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/about-me/skillImgs/jsp.png" alt="CSS" />
                                <span className="tooltip">Servlet&Jsp</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/about-me/skillImgs/thymeleaf.png" alt="JavaScript" />
                                <span className="tooltip">Thymeleaf</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/about-me/skillImgs/springBoot.png" alt="React" />
                                <span className="tooltip">Spring Boot</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/about-me/skillImgs/security.png" alt="React" />
                                <span className="tooltip">Spring Security</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/about-me/skillImgs/jpa.png" alt="React" />
                                <span className="tooltip">JPA</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/about-me/skillImgs/queryDsl.png" alt="React" />
                                <span className="tooltip">QueryDSL</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/about-me/skillImgs/mybatis.png" alt="React" />
                                <span className="tooltip">Mybatis</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/about-me/skillImgs/jwt.png" alt="React" />
                                <span className="tooltip">JWT</span>
                            </div>
                        </div>
                    </div>

                    <div className="skill-group">
                        <h3>Database</h3>
                        <div className="skills">
                            <div className="skill-icon">
                                <img className="skill-imgs" src="/about-me/skillImgs/oracle.png" alt="HTML" />
                                <span className="tooltip">Oracle</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/about-me/skillImgs/mysql.png" alt="CSS" />
                                <span className="tooltip">Mysql</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/about-me/skillImgs/mariaDB.png" alt="JavaScript" />
                                <span className="tooltip">mariaDB</span>
                            </div>
                        </div>
                    </div>

                    <div className="skill-group">
                        <h3>Tools</h3>
                        <div className="skills">
                            <div className="skill-icon">
                                <img className="skill-imgs" src="/about-me/skillImgs/github.png" alt="GitHub" />
                                <span className="tooltip">GitHub</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/about-me/skillImgs/git.png" alt="Git" />
                                <span className="tooltip">Git</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/about-me/skillImgs/figma.png" alt="Figma" />
                                <span className="tooltip">Figma</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/about-me/skillImgs/postman.png" alt="Postman" />
                                <span className="tooltip">Postman</span>
                            </div>

                            <div className="skill-icon">
                                <img className="skill-imgs" src="/about-me/skillImgs/notion.png" alt="Notion" />
                                <span className="tooltip">Notion</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PROJECTS */}
                <section id="projects">
                    <h2>프로젝트</h2>
                    <div className="project-list">
                        {projects.map((p) => (
                            <div
                                style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
                                key={p.title}
                                className="project-card"
                                onClick={() => {
                                    setProject(p);
                                    setOpen(true);
                                }}
                            >
                                <div>
                                    <h3 style={{ display: "flex", alignItems: "center", gap: "5px" }}>
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
                            <ModalHeader toggle={() => setOpen(false)}>{project.title}</ModalHeader>

                            <ModalBody>
                                <p>{project.detail}</p>
                                <p
                                    style={{
                                        fontSize: "14px",
                                        color: "#666",
                                        marginTop: "12px",
                                    }}
                                >
                                    {project.tech}
                                </p>
                            </ModalBody>

                            <ModalFooter>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ marginRight: "auto" }}>
                                    GitHub →
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
