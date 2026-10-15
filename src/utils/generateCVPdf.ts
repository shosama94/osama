import { jsPDF } from 'jspdf';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const downloadCVPdf = () => {
  const { profile, experiences, certifications, education } = PORTFOLIO_DATA;

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 40;
  const contentWidth = pageWidth - margin * 2;
  let y = 45;

  // Header Background Accent Bar
  doc.setFillColor(14, 165, 233); // Cyan
  doc.rect(margin, y, 4, 38, 'F');

  // Name & Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(15, 23, 42); // Slate-900
  doc.text('SHAIKH OSAMA', margin + 12, y + 16);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(2, 132, 199); // Cyan-600
  doc.text('Digital Marketer · SEO Expert · Customer Experience Specialist', margin + 12, y + 32);

  y += 50;

  // Contact Info Strip
  doc.setFillColor(248, 250, 252);
  doc.rect(margin, y, contentWidth, 24, 'F');
  doc.setDrawColor(226, 232, 240);
  doc.rect(margin, y, contentWidth, 24, 'S');

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  const contactText = `Email: ${profile.email}  |  Phone: ${profile.phoneDisplay}  |  LinkedIn: linkedin.com/in/shaikhosama94  |  Karachi, PK`;
  doc.text(contactText, margin + 10, y + 15);

  y += 38;

  // Section Heading Helper
  const addSectionHeading = (title: string) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    doc.text(title.toUpperCase(), margin, y);
    doc.setDrawColor(203, 213, 225);
    doc.setLineWidth(0.8);
    doc.line(margin, y + 4, pageWidth - margin, y + 4);
    y += 18;
  };

  // Professional Summary
  addSectionHeading('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const summaryLines = doc.splitTextToSize(
    'Results-driven Digital Marketer with 3+ years of specialized experience across Search Engine Optimization, enterprise social media listening, multi-channel performance marketing, customer chat support, and e-commerce website management. Currently safeguarding corporate brand health for K-Electric while delivering performance marketing for consumer and enterprise brands.',
    contentWidth
  );
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 11 + 10;

  // Work Experience
  addSectionHeading('Work Experience');

  experiences.forEach((exp) => {
    // Role & Company
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`${exp.role} — ${exp.company}`, margin, y);

    // Period & Location
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    const dateText = `${exp.period}  (${exp.location})`;
    const dateWidth = doc.getTextWidth(dateText);
    doc.text(dateText, pageWidth - margin - dateWidth, y);

    y += 12;

    // Highlights
    exp.highlights.slice(0, 3).forEach((h) => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(51, 65, 85);
      const bulletLines = doc.splitTextToSize(`• ${h}`, contentWidth - 10);
      doc.text(bulletLines, margin + 8, y);
      y += bulletLines.length * 9.5;
    });

    y += 6;
  });

  y += 6;

  // Technical Competencies
  addSectionHeading('Core Technical Competencies');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(51, 65, 85);
  const skillsText = [
    'SEO: On-Page, Off-Page, Technical Audits, Keyword Gap Research, Google Search Console, SEMrush, Yoast',
    'Social Media: Meta Ads Manager, Facebook Lead Gen Ads, Instagram Curation, Copywriting, Content Calendars',
    'Customer Experience (CX): Meltwater Social Listening, Brand Reputation, SAP S/4HANA Workflows, Crisis Escalations',
    'Web & Tools: Shopify Store Architecture, WordPress CMS, HTML5/CSS3/JavaScript, Adobe Photoshop'
  ];
  skillsText.forEach((st) => {
    doc.text(`• ${st}`, margin + 8, y);
    y += 11;
  });

  y += 10;

  // Certifications & Education (2 columns)
  addSectionHeading('Certifications & Education');
  
  const certColX = margin + 8;
  const eduColX = margin + contentWidth / 2;
  const startSectionY = y;

  // Certifications list
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Key Certifications', certColX, y);
  y += 12;

  certifications.slice(0, 5).forEach((c) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(51, 65, 85);
    doc.text(`• ${c.name} (${c.issuer})`, certColX, y);
    y += 10;
  });

  // Education list on right
  let eduY = startSectionY;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Academic Qualifications', eduColX, eduY);
  eduY += 12;

  education.slice(0, 2).forEach((ed) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(51, 65, 85);
    doc.text(`• ${ed.degree}`, eduColX, eduY);
    eduY += 9;
    doc.setFontSize(7);
    doc.setTextColor(100, 116, 139);
    doc.text(`  ${ed.institution} (${ed.score})`, eduColX, eduY);
    eduY += 11;
  });

  // Footer note
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7.5);
  doc.setTextColor(148, 163, 184);
  doc.text('Generated from Shaikh Osama Verified Executive Portfolio', margin, doc.internal.pageSize.getHeight() - 25);

  // Trigger immediate PDF file download
  doc.save('Shaikh_Osama_CV.pdf');
};
