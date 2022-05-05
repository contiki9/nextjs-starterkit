import React from 'react'

import { Breadcrumb as ChkBreadcrumb } from '@chakra-ui/react'
export type BreadcrumbProps = React.ComponentProps<typeof ChkBreadcrumb>

export const Breadcrumb: React.VFC<BreadcrumbProps> = ({
  children,
  separator = '/',
  ...BreadcrumbProps
}): JSX.Element => {
  return <ChkBreadcrumb {...BreadcrumbProps}>{children}</ChkBreadcrumb>
}
