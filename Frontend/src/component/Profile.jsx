import { Menu } from '@ark-ui/react/menu'
import {
  ChevronRightIcon,
  CreditCardIcon,
  LogOutIcon,
  MailIcon,
  MessageSquareIcon,
  PlusCircleIcon,
  SettingsIcon,
  UserIcon,
  UserPlusIcon,
} from 'lucide-react'

export const Profile = () => {
  return (
    <Menu.Root >
      <Menu.Trigger>Open</Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.ItemGroup>
            <Menu.ItemGroupLabel>My Account</Menu.ItemGroupLabel>
            <Menu.Separator />
            <Menu.Item value="profile">
              <UserIcon />
              Profile
              <span>⇧⌘P</span>
            </Menu.Item>
            <Menu.Item value="billing">
              <CreditCardIcon /> Billing
            </Menu.Item>
            <Menu.Item value="settings">
              <SettingsIcon /> Settings
              <span>⌘,</span>
            </Menu.Item>
            <Menu.Root positioning={{ placement: 'right-start', gutter: -2 }}>
              <Menu.TriggerItem>
                <UserPlusIcon />
                Invite member
                <ChevronRightIcon />
              </Menu.TriggerItem>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="email">
                    <MailIcon /> Email
                  </Menu.Item>
                  <Menu.Item value="message">
                    <MessageSquareIcon /> Message
                  </Menu.Item>
                  <Menu.Separator />
                  <Menu.Item value="other">
                    <PlusCircleIcon />
                    More Options...
                  </Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Menu.Root>
            <Menu.Separator />
            <Menu.Item value="logout" className='bg-blue-500'>
              <LogOutIcon />
              Logout
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}
export default Profile;
