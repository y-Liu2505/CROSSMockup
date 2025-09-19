import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
// liu-add 0529
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AwagVisibilityService, AwagVisibilityConfig, AwagVisibilityState } from '../../awag/awag-visibility.service';
import { ROLE_BASED_VISIBILITY } from '../maintenance-search/maintenance-search-config';
import { AwagContextService } from '../../awag/awag-context.service';
import { AppCommonService } from '../../common/app-common.service';
import { AwagConfirmModalComponent } from '../../awag/modal/awag-confirm-modal.component';

@Component({
  selector: 'app-contact-history',
  // liu-modify 0529 Angularにあるドラッグ機能を導入
  imports: [DragDropModule], 
  templateUrl: './contact-history.component.html',
  styleUrl: './contact-history.component.scss'
})
export class ContactHistoryComponent {
  constructor(
    private dialogRef: MatDialogRef<ContactHistoryComponent>,
    protected visibilityService: AwagVisibilityService,
    protected awagContext: AwagContextService,
    protected appCommon: AppCommonService,
  ) {
      this.visibilityConfig = this.visibilityService.getVisibilityConfig(ROLE_BASED_VISIBILITY, this.awagContext.getUser().getUserRoles());};
  @ViewChild('modalContainer', {static: true}) modalContainer!: ElementRef<HTMLElement>;
  
  /**
   * 活性表示・非活性表示・非表示制御設定
   */
  visibilityConfig: AwagVisibilityConfig;

  isResizing = false;
  resizeDir: string = '';
  startX = 0;
  startY = 0;
  startWidth = 0;
  startHeight = 0;
  startTop = 0;
  startBottom = 0;
  startLeft = 0;
  startRight = 0;

  close(): void {
    this.dialogRef.close();
  }
  
  selectedRowIndex: number | null = null;
  onRowClick(index: number): void {

    // 現在の行は選択されたかどうか確認
    if (this.selectedRowIndex === index) {
        // クリックした行は選択された場合、取り消し
        this.selectedRowIndex = null;
    } else {
        // クリックしていない場合選択する
        this.selectedRowIndex = index;
    }
  }
  delete() {
    const modalRef = this.appCommon.getModal().open(AwagConfirmModalComponent, { centered: true, animation: false });
  }
}
