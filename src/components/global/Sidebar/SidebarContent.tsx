import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { ReactText } from 'react'

import {
  Box,
  Divider,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  BoxProps,
  FlexProps,
  Stack,
} from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { MdHome } from 'react-icons/md'
import { MdLaunch } from 'react-icons/md'

import Logo from '../../../../public/images/logo.svg'
import { Button } from '../../core/Button'
interface LinkSubItemProps {
  name: string
  url: string
}
interface LinkItemProps extends LinkSubItemProps {
  icon: IconType
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'ホーム', icon: MdHome, url: '/' },
]
const LinkSubItems: Array<LinkSubItemProps> = [
  {
    name: '外部リンク',
    url: 'https://cntlog.net/',
  },
]
interface SidebarProps extends BoxProps {
  onClose: () => void
}

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const router = useRouter()
  const LinkSubList = (list: Array<LinkSubItemProps>) => {
    return list.map((item, i) => {
      return (
        <Box key={i}>
          <a href={item.url} target="_blank" rel="noreferrer">
            <Button rightIcon={<MdLaunch />} variant="ghost">
              {item.name}
            </Button>
          </a>
        </Box>
      )
    })
  }
  const LinkMainList = (list: Array<LinkItemProps>) => {
    return list.map((link) => {
      const isActive = router.pathname === link.url ? true : false
      return (
        <NavItem
          key={link.name}
          icon={link.icon}
          url={link.url}
          isActive={isActive}
          onClick={onClose}
        >
          {link.name}
        </NavItem>
      )
    })
  }

  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Box display={{ base: 'none', md: 'flex' }}>
          <Logo />
        </Box>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Box mx="4">{LinkMainList(LinkItems)}</Box>
      <Divider my="4" />
      <Stack spacing="2" mx="4">
        {LinkSubList(LinkSubItems)}
      </Stack>
    </Box>
  )
}

interface NavItemProps extends FlexProps {
  icon: IconType
  url: string
  isActive?: boolean
  children: ReactText
}

const NavItem = ({ icon, url, isActive, children, ...rest }: NavItemProps) => {
  const router = useRouter()
  let active = {}

  if (
    (~router.pathname.indexOf(url) && url !== '/') ||
    (router.pathname === '/' && url === '/')
  ) {
    active = {
      bg: 'primary.500',
      color: 'white',
    }
  }

  return (
    <NextLink href={url} aria-current={isActive ? 'page' : undefined} passHref>
      <Flex
        align="center"
        p="2"
        my="1"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'primary.200',
          color: 'white',
        }}
        {...active}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </NextLink>
  )
}
