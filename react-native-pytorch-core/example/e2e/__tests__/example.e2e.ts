/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import {by, device, element, expect, waitFor} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('built success', async () => {
    await waitFor(element(by.text('Playground')))
      .toBeVisible()
      .withTimeout(5000);
    await expect(element(by.text('Astro Bird'))).toBeVisible();
  });
});
