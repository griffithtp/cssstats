import React from 'react'
import uniq from 'lodash.uniq'

import { Div, Flex, SectionTitle, BackgroundColor } from './library'

export default ({ backgroundColors = [] }) => (
  <Div>
    <SectionTitle
      title={`${uniq(backgroundColors).length} Unique Background Colors`}
      description={`${backgroundColors.length} total`}
    />

    <Flex
      wrap="wrap"
      justify="space-between"
      children={uniq(backgroundColors).map(bg => (
        <Div key={bg} p={3} mb={2} w={[2 / 5, 1 / 3, 1 / 6]}>
          <BackgroundColor color={bg} />
        </Div>
      ))}
    />
  </Div>
)
