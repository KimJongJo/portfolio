import { useState } from "react";
import profile from "./assets/profile.png";
import "./App.css";
import { FaUser, FaCalendarAlt, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub } from "react-icons/fa";

export default function App() {
    const [open, setOpen] = useState(false);
    const [project, setProject] = useState(null);

    const projects = [
        {
            title: "AI Interview",
            summary: "GPT API 기반 모의 면접 서비스",
            tech: "React, Spring Boot, GPT API",
            detail: "이력서를 기반으로 질문을 생성하고 사용자의 답변에 대해 피드백을 제공하는 서비스입니다.",
            github: "https://github.com/your-id/aiinterview",
        },
        {
            title: "Movie Recommendation",
            summary: "영화 추천 웹 서비스",
            tech: "React, TMDB API",
            detail: "사용자 취향에 맞는 영화를 추천하고 상세 정보를 제공하는 서비스입니다.",
            github: "https://github.com/your-id/movie",
        },
        {
            title: "Matching Platform",
            summary: "전문가 매칭 서비스",
            tech: "Spring Boot, JPA, MySQL",
            detail: "일반 사용자와 전문가를 매칭하고 견적 요청 및 관리를 할 수 있는 플랫폼입니다.",
            github: "https://github.com/your-id/matching",
        },
        {
            title: "Portfolio Website",
            summary: "개인 포트폴리오 웹사이트",
            tech: "React, Vite, GitHub Pages",
            detail: "개인 소개와 프로젝트를 정리한 원페이지 포트폴리오 사이트입니다.",
            github: "https://github.com/your-id/portfolio",
        },
        {
            title: "Community Board",
            summary: "게시판 & 커뮤니티 서비스",
            tech: "Spring Boot, JPA, React",
            detail: "게시글 작성, 댓글, 좋아요 기능을 포함한 커뮤니티 웹 서비스입니다.",
            github: "https://github.com/your-id/community",
        },
    ];

    return (
        <div className="page">
            <div className="container">
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

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "32px",
                            marginTop: "30px",
                        }}
                    >
                        {/* 1번째 줄 */}
                        <div style={{ display: "flex", gap: "60px" }}>
                            {/* 이름 */}
                            <div
                                style={{
                                    width: "240px",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "0 auto", width: "200px" }}>
                                    <FaUser size={20} />
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                        <span style={{ fontSize: "13px", color: "#777" }}>이름</span>
                                        <span style={{ fontSize: "15px", fontWeight: "500" }}>김종조</span>
                                    </div>
                                </div>
                            </div>

                            {/* 생년월일 */}
                            <div
                                style={{
                                    width: "240px",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "0 auto", width: "200px" }}>
                                    <FaCalendarAlt size={20} />
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                        <span style={{ fontSize: "13px", color: "#777" }}>생년월일</span>
                                        <span style={{ fontSize: "15px", fontWeight: "500" }}>00.03.09</span>
                                    </div>
                                </div>
                            </div>

                            {/* 위치 */}
                            <div
                                style={{
                                    width: "240px",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "0 auto", width: "200px" }}>
                                    <FaMapMarkerAlt size={20} />
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                        <span style={{ fontSize: "13px", color: "#777" }}>위치</span>
                                        <span style={{ fontSize: "15px", fontWeight: "500" }}>서울특별시 중랑구</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2번째 줄 */}
                        <div style={{ display: "flex", gap: "60px" }}>
                            {/* 연락처 */}
                            <div
                                style={{
                                    width: "240px",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "0 auto", width: "200px" }}>
                                    <FaPhone size={20} />
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                        <span style={{ fontSize: "13px", color: "#777" }}>연락처</span>
                                        <span style={{ fontSize: "15px", fontWeight: "500" }}>010-5270-8614</span>
                                    </div>
                                </div>
                            </div>

                            {/* 이메일 */}
                            <div
                                style={{
                                    width: "240px",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "0 auto", width: "200px" }}>
                                    <FaEnvelope size={20} />
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                        <span style={{ fontSize: "13px", color: "#777" }}>이메일</span>
                                        <span style={{ fontSize: "15px", fontWeight: "500" }}>desk1614@gmail.com</span>
                                    </div>
                                </div>
                            </div>

                            {/* GitHub */}
                            <div
                                style={{
                                    width: "240px",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "0 auto", width: "200px" }}>
                                    <FaGithub size={20} />
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                        <span style={{ fontSize: "13px", color: "#777" }}>깃허브</span>
                                        <a
                                            style={{
                                                fontSize: "15px",
                                                fontWeight: "500",
                                                color: "#0366d6",
                                                cursor: "pointer",
                                            }}
                                            href="https://github.com/KimJongJo"
                                            target="_blank"
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
                                key={p.title}
                                className="project-card"
                                onClick={() => {
                                    setProject(p);
                                    setOpen(true);
                                }}
                            >
                                <h3>{p.title}</h3>
                                <p>{p.summary}</p>
                                <small>{p.tech}</small>
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
                {open && (
                    <div className="modal" onClick={() => setOpen(false)}>
                        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                            <h3>{project.title}</h3>
                            <p>{project.detail}</p>
                            <p className="tech">{project.tech}</p>
                            <a href={project.github} target="_blank">
                                GitHub →
                            </a>
                            <button onClick={() => setOpen(false)}>닫기</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
