const { test, expect, describe } = require('@playwright/test')

describe('Note app', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('http://localhost:5173')

    const locator = page.getByText('Notes')
    await expect(locator).toBeVisible()
    await expect(
      page.getByText(
        'Note app, Department of Computer Science, University of Helsinki 2024'
      )
    ).toBeVisible()
  })

  test('login form can be opened', async ({ page }) => {
    await page.goto('http://localhost:5173')

    await page.getByRole('button', { name: 'login' }).click()
    await page.getByRole('textbox').first().fill('admin')
    await page.getByRole('textbox').last().fill('admin123')
    await page.getByRole('button', { name: 'login' }).click()

    await expect(page.getByText('Jaimin logged-in')).toBeVisible()
  })
})
