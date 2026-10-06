import os
import sys
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

class SinglePageCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def draw_footer(self):
        self.saveState()
        self.setFont("Helvetica", 7.5)
        self.setFillColor(colors.HexColor("#64748b"))
        self.drawString(32, 16, "Ratan Chaurasiya • Portfolio: ratanchaurasiya.github.io • GitHub: github.com/Ratanchaurasiya")
        self.drawRightString(580, 16, "ratanchaurasiya61@gmail.com | +91 63900 35039")
        self.setStrokeColor(colors.HexColor("#e2e8f0"))
        self.setLineWidth(0.5)
        self.line(32, 24, 580, 24)
        self.restoreState()

    def showPage(self):
        self.draw_footer()
        super().showPage()

def build_resume(output_path):
    # Printable area: 612 x 792 pt. Margins: left/right=32, top=26, bottom=26
    # Printable width: 548 pt, Printable height: 740 pt
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=32,
        rightMargin=32,
        topMargin=26,
        bottomMargin=26,
    )

    PRIMARY = colors.HexColor("#0f2b5c")     # Deep navy
    ACCENT = colors.HexColor("#1d4ed8")      # Royal blue
    TEXT_DARK = colors.HexColor("#1e293b")   # Slate 800
    TEXT_MUTED = colors.HexColor("#475569")  # Slate 600

    styles = getSampleStyleSheet()

    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=21,
        textColor=PRIMARY,
    )

    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.2,
        leading=12,
        textColor=ACCENT,
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.8,
        leading=12.5,
        textColor=PRIMARY,
        spaceBefore=0,
        spaceAfter=0,
    )

    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.3,
        leading=11.4,
        textColor=TEXT_DARK,
    )

    bullet_style = ParagraphStyle(
        'BulletCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=11.2,
        textColor=TEXT_DARK,
        leftIndent=9,
        firstLineIndent=-9,
        spaceAfter=1.2,
    )

    job_title_style = ParagraphStyle(
        'JobTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.8,
        leading=11.5,
        textColor=PRIMARY,
    )

    job_meta_style = ParagraphStyle(
        'JobMeta',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.2,
        leading=11,
        textColor=ACCENT,
        alignment=2,
    )

    job_sub_style = ParagraphStyle(
        'JobSub',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.0,
        leading=10.5,
        textColor=TEXT_MUTED,
    )

    content = []

    def add_section_header(title, space_before=4, space_after=2.5):
        header_table = Table(
            [[Paragraph(f"<b>{title.upper()}</b>", section_heading)]],
            colWidths=[548],
        )
        header_table.setStyle(TableStyle([
            ('BOTTOMPADDING', (0, 0), (-1, -1), 1.5),
            ('TOPPADDING', (0, 0), (-1, -1), 1.5),
            ('LEFTPADDING', (0, 0), (-1, -1), 0),
            ('RIGHTPADDING', (0, 0), (-1, -1), 0),
            ('LINEBELOW', (0, 0), (-1, -1), 1.1, ACCENT),
        ]))
        content.append(Spacer(1, space_before))
        content.append(header_table)
        content.append(Spacer(1, space_after))

    # --- HEADER ---
    header_data = [
        [
            Paragraph("RATAN CHAURASIYA", title_style),
            Paragraph("Ahmedabad, Gujarat, India &nbsp;|&nbsp; <font color='#1d4ed8'><b>+91 63900 35039</b></font><br/>"
                      "<a href='mailto:ratanchaurasiya61@gmail.com'><font color='#1d4ed8'><u>ratanchaurasiya61@gmail.com</u></font></a>",
                      job_meta_style)
        ],
        [
            Paragraph("Full Stack Developer • Data Analytics &amp; AI Specialist", subtitle_style),
            Paragraph("<a href='https://ratanchaurasiya.github.io'><font color='#1d4ed8'><u>ratanchaurasiya.github.io</u></font></a> &nbsp;|&nbsp; "
                      "<a href='https://linkedin.com/in/ratan-chaurasiya-663806286'><font color='#1d4ed8'><u>LinkedIn</u></font></a> &nbsp;|&nbsp; "
                      "<a href='https://github.com/Ratanchaurasiya'><font color='#1d4ed8'><u>GitHub</u></font></a>",
                      job_meta_style)
        ]
    ]
    header_table = Table(header_data, colWidths=[338, 210])
    header_table.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 0.5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 0.5),
    ]))
    content.append(header_table)
    content.append(Spacer(1, 1.5))
    content.append(HRFlowable(width="100%", thickness=0.7, color=colors.HexColor("#e2e8f0"), spaceBefore=1.5, spaceAfter=2.5))

    # --- PROFESSIONAL SUMMARY ---
    add_section_header("Professional Summary", space_before=2, space_after=2)
    summary_text = (
        "<b>Full Stack Developer &amp; Information Technology student</b> with hands-on experience in architecting "
        "scalable web applications, responsive interfaces, relational schemas, and data pipelines. "
        "Proficient in React, Next.js, Node.js, Express, MySQL, MongoDB, Python, and Technical SEO. Currently working as "
        "<b>SEO Intern at Advaitya Projects</b> and administering the <b>Desktop Locker System</b>, combining strong computer "
        "science fundamentals with practical software engineering, clean code architecture, and problem-solving."
    )
    content.append(Paragraph(summary_text, body_style))

    # --- TECHNICAL SKILLS ---
    add_section_header("Technical Skills", space_before=3.5, space_after=2)
    skills_data = [
        [
            Paragraph("<b>Languages:</b>", body_style),
            Paragraph("JavaScript (ES6+), TypeScript, Python, C, C++, Java, PHP, SQL (MySQL), HTML5, CSS3", body_style)
        ],
        [
            Paragraph("<b>Frontend:</b>", body_style),
            Paragraph("React.js, Next.js, Tailwind CSS, Bootstrap, Three.js, GSAP, Framer Motion, Responsive UI", body_style)
        ],
        [
            Paragraph("<b>Backend &amp; APIs:</b>", body_style),
            Paragraph("Node.js, Express.js, RESTful APIs, NextAuth.js, JWT Authentication, API Routing", body_style)
        ],
        [
            Paragraph("<b>Databases:</b>", body_style),
            Paragraph("MySQL, MySQL Workbench, MongoDB, Firebase, Relational Database Modeling &amp; Normalization", body_style)
        ],
        [
            Paragraph("<b>Data &amp; AI:</b>", body_style),
            Paragraph("Python (NumPy, Pandas, Matplotlib), Power BI, Excel Automation, Generative AI APIs", body_style)
        ],
        [
            Paragraph("<b>Tools &amp; DevOps:</b>", body_style),
            Paragraph("Git, GitHub, Docker, Postman, Vercel, Render, Linux, Figma, Google Search Console, Google Analytics", body_style)
        ],
    ]
    skills_table = Table(skills_data, colWidths=[110, 438])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 0.5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 0.5),
    ]))
    content.append(skills_table)

    # --- WORK EXPERIENCE ---
    add_section_header("Work Experience &amp; Practical Roles", space_before=3.5, space_after=2)

    # Experience 1: Advaitya Projects
    exp1_row1 = [
        Paragraph("<b>SEO Intern</b> — <i>Advaitya Projects</i>", job_title_style),
        Paragraph("Ahmedabad, Gujarat | Sep 2024 – Present", job_meta_style)
    ]
    t_exp1 = Table([exp1_row1], colWidths=[368, 180])
    t_exp1.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 0),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 0.8),
    ]))
    content.append(t_exp1)
    content.append(Paragraph("• Driving organic search visibility, technical SEO audits, site crawlability, Core Web Vitals, and JSON-LD schema markups.", bullet_style))
    content.append(Paragraph("• Conducting keyword research, competitor gap analysis, and content optimization to improve Google rankings and traffic.", bullet_style))
    content.append(Paragraph("• Tracking analytics via Google Search Console and GA4, resolving indexing issues and analyzing user performance.", bullet_style))
    content.append(Spacer(1, 1.5))

    # Experience 2: Desktop Locker System
    exp2_row1 = [
        Paragraph("<b>Administrator &amp; Systems Contributor</b> — <i>Desktop Locker System</i>", job_title_style),
        Paragraph("2024 – Present", job_meta_style)
    ]
    t_exp2 = Table([exp2_row1], colWidths=[388, 160])
    t_exp2.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 0),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 0.8),
    ]))
    content.append(t_exp2)
    content.append(Paragraph("• Administering user access management, role privileges, authentication policies, and 24/7 system uptime.", bullet_style))
    content.append(Paragraph("• Managing relational schemas in MySQL Workbench; validated local vs. cloud database persistence with zero data loss.", bullet_style))
    content.append(Paragraph("• Conducting root-cause debugging across multi-tier backend routing and database transactions.", bullet_style))

    # --- TECHNICAL PROJECTS (ONLY 2 PROJECTS) ---
    add_section_header("Technical Projects", space_before=3.5, space_after=2)

    # Project 1: Evoniq ERP
    p1_head = [
        Paragraph("<b>Evoniq ERP — Unified Enterprise SaaS Operating System</b>", job_title_style),
        Paragraph("React • Node.js • Express • Cloud SaaS", job_meta_style)
    ]
    t_p1 = Table([p1_head], colWidths=[358, 190])
    t_p1.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 0.5),
    ]))
    content.append(t_p1)
    content.append(Paragraph("<i>GitHub: <a href='https://github.com/Ratanchaurasiya/Evoniq'><font color='#1d4ed8'><u>github.com/Ratanchaurasiya/Evoniq</u></font></a></i>", job_sub_style))
    content.append(Paragraph("• Architected a unified enterprise cloud SaaS platform centralizing CRM lead management, sales workflows, project operations, and real-time analytics for real estate and engineering firms.", bullet_style))
    content.append(Paragraph("• Built modular responsive dashboards in React and engineered scalable REST API gateways for multi-tier business workflows.", bullet_style))
    content.append(Spacer(1, 1.5))

    # Project 2: Employee Asset Management System
    p2_head = [
        Paragraph("<b>Employee Asset Management System (EMP Dashboard)</b>", job_title_style),
        Paragraph("React • TypeScript • Node.js • Express • MySQL", job_meta_style)
    ]
    t_p2 = Table([p2_head], colWidths=[358, 190])
    t_p2.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 0.5),
    ]))
    content.append(t_p2)
    content.append(Paragraph("<i>GitHub: <a href='https://github.com/Ratanchaurasiya/EMP-Daishboard-'><font color='#1d4ed8'><u>github.com/Ratanchaurasiya/EMP-Daishboard-</u></font></a></i>", job_sub_style))
    content.append(Paragraph("• Designed an enterprise IT hardware lifecycle platform managing employee records, desktop/laptop allocations, SIM inventory, returns, and maintenance service tickets.", bullet_style))
    content.append(Paragraph("• Implemented normalized MySQL relational database schemas ensuring data integrity across asset assignments and repair logs.", bullet_style))

    # --- EDUCATION (SILVER OAK UNIVERSITY ONLY) ---
    add_section_header("Education", space_before=3.5, space_after=2)

    edu1_head = [
        Paragraph("<b>Silver Oak University (SOCET)</b> — <i>B.Tech in Information Technology</i>", job_title_style),
        Paragraph("Ahmedabad, Gujarat | 2023 – 2027", job_meta_style)
    ]
    t_edu1 = Table([edu1_head], colWidths=[378, 170])
    t_edu1.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 0.5),
    ]))
    content.append(t_edu1)
    content.append(Paragraph("• <b>Relevant Coursework:</b> Data Structures &amp; Algorithms, Object-Oriented Programming, Database Management Systems (DBMS), Cloud Computing, Computer Networks, Web Technologies, Software Engineering.", bullet_style))

    # --- CERTIFICATIONS & ACHIEVEMENTS ---
    add_section_header("Certifications &amp; Achievements", space_before=3.5, space_after=2)

    certs_data = [
        [
            Paragraph("• <b>Elite: Cloud Computing</b> — NPTEL, IIT Kharagpur (Score: 60%, 12-Week Proctored Exam)", body_style),
            Paragraph("• <b>Elite: OOP Fundamentals</b> — NPTEL, IIT Roorkee (Score: 61%, 4 Credits)", body_style),
        ],
        [
            Paragraph("• <b>Power BI for Business Applications</b> — Microsoft &amp; FICE (20-Hour Completed)", body_style),
            Paragraph("• <b>Artificial Intelligence Fundamentals</b> — IBM SkillsBuild (Verified Credly)", body_style),
        ],
        [
            Paragraph("• <b>JavaScript Certification</b> — IIT Bombay Spoken Tutorial (Score: 77.50%, 2 Credits)", body_style),
            Paragraph("• <b>Microsoft Copilot Generative AI</b> — Microsoft &amp; FICE (35-Hour Completed)", body_style),
        ],
        [
            Paragraph("• <b>Data Analyst 101</b> — Simplilearn &amp; Microsoft (Data &amp; SQL Pipelines)", body_style),
            Paragraph("• <b>College Ambassador</b> — Techfest, IIT Bombay (Asia's Largest Science &amp; Tech Festival)", body_style),
        ],
    ]
    certs_table = Table(certs_data, colWidths=[274, 274])
    certs_table.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 0.4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 0.4),
    ]))
    content.append(certs_table)

    doc.build(content, canvasmaker=SinglePageCanvas)
    print(f"Successfully generated 1-page resume at {output_path}")

if __name__ == "__main__":
    out = "public/document/Ratan-Chaurasiya-Resume.pdf"
    os.makedirs(os.path.dirname(out), exist_ok=True)
    build_resume(out)
