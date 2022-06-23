import { NgModule } from '@angular/core';

// Modules

import { DragDropModule } from '@angular/cdk/drag-drop';
import { SharedModule } from '@app/@shared';
import { BoardRoutingModule } from './board-routing.module';

// Components
import { BoardComponent } from './board.component';

@NgModule({
  imports: [SharedModule, DragDropModule, BoardRoutingModule],
  declarations: [BoardComponent],
})
export class BoardModule {}
