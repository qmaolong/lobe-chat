import { DraggablePanelBody, Logo } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import FolderPanel from '@/features/FolderPanel';

import List from './List';

const useStyles = createStyles(({ stylish, token, css }) => ({
  body: stylish.noScrollbar,
  logo: css`
    fill: ${token.colorText};
  `,
  top: css`
    position: sticky;
    top: 0;
  `,
}));

const SideBar = memo(() => {
  const { styles } = useStyles();

  return (
    <FolderPanel>
      <DraggablePanelBody className={styles.body} style={{ padding: 0 }}>
        <Flexbox className={styles.top} padding={16}>
          <div>
            <Logo className={styles.logo} size={36} type={'text'} />
          </div>
        </Flexbox>
        <List />
      </DraggablePanelBody>
    </FolderPanel>
  );
});

export default SideBar;
