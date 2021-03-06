/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import './fade.scss';

import { TransitionStrings } from '../../../i18n';

const { fade: strings } = TransitionStrings;

export const fade = () => ({
  name: 'fade',
  displayName: strings.getDisplayName(),
  help: strings.getHelp(),
  enter: 'fadeIn',
  exit: 'fadeOut',
});
