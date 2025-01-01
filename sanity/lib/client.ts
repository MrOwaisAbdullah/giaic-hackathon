import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

interface WebhookBody {
  document: {
    oldPrice: number;
    _id: string;
  };
}

export default async function updateDiscountedField(req: { body: WebhookBody }, res: { status: (code: number) => { send: (message: string) => void } }) {
  const { body } = req;
  const { oldPrice, _id } = body?.document;

  if (oldPrice && oldPrice > 0) {
    await client
      .patch(_id)
      .set({ isDiscounted: true })
      .commit();
  } else {
    await client
      .patch(_id)
      .set({ isDiscounted: false })
      .commit();
  }

  res.status(200).send('Discount field updated');
}