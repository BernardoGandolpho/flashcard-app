interface FlashcardPageProps {
  params: Promise<{ id: string }>
}

export default async function FlashcardPage({ params }: FlashcardPageProps) {
  const { id } = await params;

  return (
    <main className="p-4">
      <h1 className="text-xl font-semibold">Flashcard {id}</h1>
    </main>
  );
}
