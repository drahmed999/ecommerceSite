import { Button } from "../ui/button"
import { Input } from "../ui/input"

export function MyInputWithButton() {
  return (
    <div className="flex-col sm:flex px-2 sm:flex-row space-y-2  sm:space-y-0 w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Enter Your Email" />
      <Button type="submit">Subscribe</Button>
    </div>
  )
}
