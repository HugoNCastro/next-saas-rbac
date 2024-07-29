import { Label } from '@radix-ui/react-label'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
// eslint-disable-next-line @typescript-eslint/no-var-requires

export default function ForgotPasswordPage() {
  return (
    <form action="" className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input name="email" type="email" id="email" />
      </div>

      <Button className="w-full" type="submit">
        Recover password
      </Button>

      <Button className="w-full" variant="link" asChild size="sm">
        <Link href="/auth/sign-in">Sign in instead</Link>
      </Button>
    </form>
  )
}
