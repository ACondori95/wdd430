import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],
})
export class DocumentListComponent implements OnInit {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();
  documents: Document[] = [
    new Document('1', 'doc-1', 'This is the first document', 'localhost', []),
    new Document('2', 'doc-2', 'This is the second document', 'localhost', []),
    new Document('3', 'doc-3', 'This is the third document', 'localhost', []),
    new Document('4', 'doc-4', 'This is the fourth document', 'localhost', []),
  ];

  constructor() {}

  ngOnInit(): void {}

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
