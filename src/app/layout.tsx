import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flashcards App",
  description: "App de flashcards",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen w-screen flex`}
      >
        {/* SIDEBAR — aparece no desktop */}
        <aside className="hidden md:flex w-64 border-r p-4 flex-col">
          <h2 className="text-lg font-semibold mb-4">Flashcards</h2>

          <nav className="space-y-2">
            <a href="/" className="block hover:text-blue-600">
              Início
            </a>
            <a href="/flashcards" className="block hover:text-blue-600">
              Meus Flashcards
            </a>
            <a href="/profile" className="block hover:text-blue-600">
              Perfil
            </a>
          </nav>
        </aside>

        {/* CONTEÚDO PRINCIPAL */}
        <main className="flex-1 p-4 pb-20 md:pb-4">{children}</main>

        {/* BOTTOM BAR — aparece só no mobile */}
        <nav className="fixed bottom-0 inset-x-0 md:hidden bg-white border-t flex justify-around p-2">
          <a href="/" className="text-sm">🏠</a>
          <a href="/flashcards" className="text-sm">📝</a>
          <a href="/profile" className="text-sm">👤</a>
        </nav>
      </body>
    </html>
  );
}
