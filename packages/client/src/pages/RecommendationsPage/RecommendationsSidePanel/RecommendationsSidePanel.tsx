/*
 * © 2021 Thoughtworks, Inc.
 */

import React, { FunctionComponent, ReactElement } from 'react'
import { Container, Divider, Grid } from '@material-ui/core'
import SidePanel from 'common/SidePanel'
import { RecommendationRow } from 'Types'
import { RecommendationsPanelRow, RecommendationsPanelColumn } from './layout'
import useStyles from './recommendationsSidePanelStyles'

type RecommendationsSidePanelProps = {
  recommendation: RecommendationRow
}

const RecommendationsSidePanel: FunctionComponent<RecommendationsSidePanelProps> =
  ({ recommendation }): ReactElement => {
    const classes = useStyles()

    return (
      <SidePanel
        drawerWidth={475}
        title="Recommendation Details"
        defaultIsOpen
        triggerOpenOnChange
      >
        <Container className={classes.detailsContainer}>
          <RecommendationsPanelRow
            label="Cloud Provider"
            content={recommendation.cloudProvider}
          />
          <RecommendationsPanelRow
            label="Account Name"
            content={recommendation.accountName}
          />
          <RecommendationsPanelRow
            label="Account ID"
            content={recommendation.accountId}
          />
          <RecommendationsPanelRow
            label="Region"
            content={recommendation.region}
          />
        </Container>
        <Divider />
        <Container className={classes.detailsContainer}>
          <RecommendationsPanelColumn
            label="Recommendation Type"
            content={recommendation.recommendationType}
          />
          <RecommendationsPanelColumn
            label="Recommendation Detail"
            content={recommendation.recommendationDetail}
            hasLeftAlignedContent
          />
        </Container>
        <Grid className={classes.savingsContainer} container wrap="nowrap">
          <RecommendationsPanelColumn
            label="Cost Savings"
            subLabel="(USD)"
            content={recommendation.costSavings.toFixed(3)}
          />
          <RecommendationsPanelColumn
            label="CO2e Savings"
            subLabel="(metric tons)"
            content={recommendation.co2eSavings.toFixed(3)}
          />
          <RecommendationsPanelColumn
            label="Energy Savings"
            subLabel="(kilowatt hours)"
            content={recommendation.kilowattHourSavings.toFixed(3)}
          />
        </Grid>
      </SidePanel>
    )
  }

export default RecommendationsSidePanel
