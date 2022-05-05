import React from 'react'

import {
  BreadcrumbItem as ChkBreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
export type BreadcrumbItemProps = {
  isSeparator?: boolean
} & React.ComponentProps<typeof BreadcrumbLink>

export const BreadcrumbItem: React.VFC<BreadcrumbItemProps> = ({
  children,
  isCurrentPage,
  ...BreadcrumbItemProps
}): JSX.Element => {
  const currentPageStyle = () => {
    return isCurrentPage === true
      ? {
          color: 'gray.500',
          cursor: 'default',
          _hover: { textDecoration: 'none' },
        }
      : {}
  }
  const separator = () => {
    return isCurrentPage === true ? '' : '/'
  }
  return (
    <ChkBreadcrumbItem
      isCurrentPage={isCurrentPage}
      separator={separator()}
      spacing={2}
    >
      <BreadcrumbLink {...BreadcrumbItemProps} {...currentPageStyle()}>
        {children}
      </BreadcrumbLink>
    </ChkBreadcrumbItem>
  )
}
