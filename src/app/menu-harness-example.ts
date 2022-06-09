import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

/**
 * @title Testing with MatMenuHarness
 */
@Component({
  selector: 'menu-harness-example',
  templateUrl: 'menu-harness-example.html',
})
export class MenuHarnessExample {
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
