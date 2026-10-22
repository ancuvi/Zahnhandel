// Einstieg fürs Vorrendern: rendert eine Route zu HTML und liefert die
// Kopfdaten der Seo-Komponente mit. Wird von scripts/vorrendern.mjs über
// den SSR-Build (dist-ssr/entry-server.js) aufgerufen – kein Browser nötig.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router-dom'
import { routenKonfiguration, seiten } from './router/routen'
import { SeoSammler, type SeoDaten } from './components/SEO/Seo'
import { SITE } from './components/SEO/Seo'

export const pfade = seiten.map((s) => s.path)

export async function render(pfad: string): Promise<{ html: string; seo: SeoDaten | null }> {
  const handler = createStaticHandler(routenKonfiguration)
  const context = await handler.query(new Request(`${SITE}${pfad}`))
  if (context instanceof Response) {
    throw new Error(`Unerwartete Antwort beim Vorrendern von ${pfad}: ${context.status}`)
  }
  const router = createStaticRouter(handler.dataRoutes, context)

  let seo: SeoDaten | null = null
  const html = renderToString(
    <StrictMode>
      <SeoSammler.Provider value={{ setzen: (d) => (seo = d) }}>
        <StaticRouterProvider router={router} context={context} hydrate={false} />
      </SeoSammler.Provider>
    </StrictMode>,
  )
  return { html, seo }
}
