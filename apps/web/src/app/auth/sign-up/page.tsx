import { Label } from '@radix-ui/react-label'
import { Separator } from '@radix-ui/react-separator'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const githubIcon = require('@/assets/github-icon.svg') as string

export default function SignUpPage() {
  return (
    <form action="" className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="name">Name</Label>
        <Input name="name" id="name" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input name="email" type="email" id="email" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password_confirmation">Password</Label>
        <Input
          name="password_confirmation"
          type="password"
          id="password_confirmation"
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Confirm your password</Label>
        <Input name="password" type="password" id="password" />
      </div>

      <Button className="w-full" type="submit">
        Create account
      </Button>

      <Button className="w-full" variant="link" asChild size="sm">
        <Link href="/auth/sign-in">Already registered ? Sign In</Link>
      </Button>

      <Separator />

      <Button className="w-full" variant="outline" type="submit">
        <Image alt="" src={githubIcon} className="mr-2 size-4 dark:invert" />
        Sign up with GitHub
      </Button>
    </form>
  )
}
