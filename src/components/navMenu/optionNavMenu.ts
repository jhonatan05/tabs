export const NavObject = [
  {
    content: 'First Tab content to be displayed here.',
  },
  {
    content: 'Second Tab content to be displayed here.',
  },
  {
    content: 'Third Tab content to be displayed here.',
  },
  {
    content: 'Fourth Tab content to be displayed here.',
  },
]

export const getNavData = (index: number) => {
  return Array(1).fill(NavObject[index])
}
