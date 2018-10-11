import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TemplatesService } from '../../services/templates/templates.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent {
  title: string = 'Template Builder';
  templateForm: FormGroup;
  templateId: number;
  templates: any[] = [];
  activeTemplate: any;
  selectedTemplate: any;

  constructor(
    private fb: FormBuilder,
    private templatesService: TemplatesService
  ) {
    this.templateForm = this.fb.group({
      templateMessage: ['', Validators.required],
      templateName: ['', Validators.required]
    });

    this.loadTemplates();
  }

  loadTemplates(): void {
    this.templatesService.getAllTemplates().subscribe((templates) => {
      this.templates = templates;
      this.activeTemplate = this.templates[0];
    })
  }

  addTemplate(): void {
    // @TODO removed the templateId once development is completed!
    this.templateForm.value.templateId = Math.ceil(Math.random() * 7.5)

    this.templatesService.addTemplate(this.templateForm.value).subscribe((Template) => {
      this.templateForm.reset();
      this.loadTemplates();
    });
  }

  editTemplate(): void {
    if (!this.selectedTemplate.id) {
      this.selectedTemplate.id = this.selectedTemplate.templateId;
    }

    this.templatesService.updateTemplate(this.selectedTemplate.id, this.selectedTemplate).subscribe((Template) => {
      this.templateForm.reset();
      this.selectedTemplate = null;
      this.loadTemplates();
    });
  }

  deleteTemplate(): void {

    if (!this.selectedTemplate.id) {
      this.selectedTemplate.id = this.selectedTemplate.templateId;
    }

    this.templatesService.deleteTemplate(this.selectedTemplate.id).subscribe((Template) => {
      this.templateForm.reset();
      this.selectedTemplate = null;
      this.loadTemplates();
    });
  }

  onSubmit(): void {
    if (this.templateId) {
      this.editTemplate();
    } else {
      this.addTemplate();
    }
  }
}
