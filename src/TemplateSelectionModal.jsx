import React, { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './TemplateSelectionModal.css';
import BiodataPreview from './BiodataPreview';
import TemplateSidebar from './TemplateSidebar';
import { templates } from './templates';

function TemplateSelectionModal({ onClose, personalFields, familyFields, contactFields, photoUrl }) {
  const [selectedTemplateId, setSelectedTemplateId] = useState(1);
  const [title, setTitle] = useState("|| SHREE GANESHAYA NAMAH ||");
  const [selectedLogo, setSelectedLogo] = useState("");
  const previewRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!previewRef.current) return;
    setIsDownloading(true);
    try {
      const element = previewRef.current;
      const canvas = await html2canvas(element, { scale: 2, useCORS: true });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('biodata.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
    setIsDownloading(false);
  };

  const selectedTemplate = templates.find(t => t.id === selectedTemplateId) || templates[0];

  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  return (
    <div className="template-modal-overlay">
      <div className="template-modal-container">
        <div className="template-preview-panel">
          <BiodataPreview 
            template={selectedTemplate}
            personalFields={personalFields}
            familyFields={familyFields}
            contactFields={contactFields}
            photoUrl={photoUrl}
            title={title}
            selectedLogo={selectedLogo}
            innerRef={previewRef}
          />
        </div>
        <div className="template-sidebar-panel">
          <TemplateSidebar 
            templates={templates}
            selectedTemplateId={selectedTemplateId}
            onSelect={setSelectedTemplateId}
            onClose={onClose}
            title={title}
            setTitle={setTitle}
            selectedLogo={selectedLogo}
            setSelectedLogo={setSelectedLogo}
            onDownload={handleDownload}
            isDownloading={isDownloading}
          />
        </div>
      </div>
    </div>
  );
}

export default TemplateSelectionModal;
