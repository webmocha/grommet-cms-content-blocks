// @flow
import React from 'react';
import MailIcon from 'grommet/components/icons/base/Mail';
import LinkNextIcon from 'grommet/components/icons/base/LinkNext';
import ChatIcon from 'grommet/components/icons/base/Chat';
import ShareIcon from 'grommet/components/icons/base/Share';
import DocumentWordIcon from 'grommet/components/icons/base/DocumentWord';
import AttachmentIcon from 'grommet/components/icons/base/Attachment';
import DocumentZipIcon from 'grommet/components/icons/base/DocumentZip';
import DocumentDownloadIcon from 'grommet/components/icons/base/DocumentDownload';
import PrintIcon from 'grommet/components/icons/base/Print';
import CirclePlayIcon from 'grommet/components/icons/base/CirclePlay';
import DownloadIcon from 'grommet/components/icons/base/Download';
import FormCheckmarkIcon from 'grommet/components/icons/base/FormCheckmark';
import FormSubtractIcon from 'grommet/components/icons/base/FormSubtract';
import FormCloseIcon from 'grommet/components/icons/base/FormClose';
import DocumentPpt from 'grommet/components/icons/base/DocumentPpt';

export default {
  primary: <LinkNextIcon />,
  email: <MailIcon />,
  chat: <ChatIcon />,
  share: <ShareIcon />,
  attachment: <AttachmentIcon />,
  word: <DocumentWordIcon />,
  zip: <DocumentZipIcon />,
  'document download': <DocumentDownloadIcon />,
  download: <DownloadIcon />,
  play: <CirclePlayIcon />,
  print: <PrintIcon />,
  'do': <FormCheckmarkIcon />,
  'limitedUse': <FormSubtractIcon />,
  'doNot': <FormCloseIcon />,
  'pdf': <DocumentPpt />,
};
