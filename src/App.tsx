import { Button, Input, Label, Badge, Avatar, Spinner, Checkbox, Radio, Select } from './components/atoms'

function App() {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ]

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Composants Atomiques</h1>
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Buttons</h2>
        <div className="flex gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Inputs</h2>
        <div className="max-w-md space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="email@example.com" />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Badges</h2>
        <div className="flex gap-2">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="danger">Danger</Badge>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Avatars</h2>
        <div className="flex gap-2 items-center">
          <Avatar size="sm" name="John Doe" />
          <Avatar size="md" name="Jane Smith" />
          <Avatar size="lg" name="Bob Johnson" />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Spinner</h2>
        <Spinner />
      </div>
    </div>
  )
}

export default App