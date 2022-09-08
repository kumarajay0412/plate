import React from 'react';
import { commonDeps, plateTestUtilsDeps } from '../sandpack/code-deps';
import { CommonSandpack } from '../sandpack/CommonSandpack';
import { basicElementsFiles } from '../sandpack/files/basic-elements/code-basicElementsFiles';
import { basicMarksFiles } from '../sandpack/files/basic-marks/code-basicMarksFiles';
import { basicNodesFiles } from '../sandpack/files/basic-nodes/code-basicNodesFiles';
import { blockSelectionAppCode } from '../sandpack/files/code-BlockSelectionApp';
import { commonFiles } from '../sandpack/files/common/code-commonFiles';
import { getNodesWithIdFile } from '../sandpack/files/dnd/code-getNodesWithId';
import { typescriptFiles } from '../sandpack/files/typescript/code-typescriptFiles';

export const BlockSelectionSandpack = () => (
  <CommonSandpack
    height={722}
    previewSize={3}
    deps={{
      ...commonDeps,
      ...plateTestUtilsDeps,
    }}
    appCode={blockSelectionAppCode}
    files={{
      ...basicNodesFiles,
      ...basicElementsFiles,
      ...basicMarksFiles,
      ...getNodesWithIdFile,
      ...commonFiles,
      ...typescriptFiles,
    }}
  />
);