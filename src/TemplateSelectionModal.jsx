import React, { useState } from 'react';
import './TemplateSelectionModal.css';
import BiodataPreview from './BiodataPreview';
import TemplateSidebar from './TemplateSidebar';
import { templates } from './templates';

function TemplateSelectionModal({ onClose, personalFields, familyFields, contactFields, photoUrl }) {
  const [selectedTemplateId, setSelectedTemplateId] = useState(1);
  const [title, setTitle] = useState("|| SHREE GANESHAYA NAMAH ||");
  const [selectedLogo, setSelectedLogo] = useState("");

  const selectedTemplate = templates.find(t => t.id === selectedTemplateId) || templates[0];

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
          />
        </div>
      </div>
    </div>
  );
}

export default TemplateSelectionModal;
