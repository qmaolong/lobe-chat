import { DraggablePanel, DraggablePanelBody, DraggablePanelContainer } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo, useState } from 'react';

import SafeSpacing from '@/components/SafeSpacing';
import { MARKET_SIDEBAR_WIDTH } from '@/const/layoutTokens';
import { agentMarketSelectors, useMarketStore } from '@/store/market';

import AgentDetailContent from '../../features/AgentDetailContent';

const useStyles = createStyles(({ css, token, stylish }) => ({
  content: css`
    display: flex;
    flex-direction: column;
  `,
  drawer: css`
    background: ${token.colorBgLayout};
  `,
  header: css`
    border-bottom: 1px solid ${token.colorBorder};
  `,
  noScrollbar: stylish.noScrollbar,
}));

const SideBar = memo(() => {
  const { styles } = useStyles();
  const [tempId, setTempId] = useState<string>('');
  const [showAgentSidebar, deactivateAgent, activateAgent] = useMarketStore((s) => [
    agentMarketSelectors.showSideBar(s),
    s.deactivateAgent,
    s.activateAgent,
  ]);

  return (
    <DraggablePanel
      className={styles.drawer}
      classNames={{
        content: styles.content,
      }}
      expand={showAgentSidebar}
      minWidth={MARKET_SIDEBAR_WIDTH}
      mode={'fixed'}
      onExpandChange={(show) => {
        if (!show) {
          setTempId(useMarketStore.getState().currentIdentifier);
          deactivateAgent();
        } else if (tempId) {
          activateAgent(tempId);
        }
      }}
      placement={'right'}
    >
      <DraggablePanelContainer
        style={{
          flex: 'none',
          height: '100vh',
          minWidth: MARKET_SIDEBAR_WIDTH,
        }}
      >
        <SafeSpacing />
        <DraggablePanelBody
          className={styles.noScrollbar}
          style={{ padding: 0, position: 'relative' }}
        >
          <AgentDetailContent />
        </DraggablePanelBody>
      </DraggablePanelContainer>
    </DraggablePanel>
  );
});

export default SideBar;
