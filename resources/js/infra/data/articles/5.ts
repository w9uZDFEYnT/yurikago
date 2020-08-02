import content from "~/resources/markdown/articles/5.md"
import { IArticleObject } from "~/resources/js/infra/data/interface/IArticleObject.ts"
import { tagListWithKey } from "~/resources/js/infra/data/tags/all.ts"

const article: IArticleObject = {
  id: 5,
  title: "Alpine Linux 3.10.3 Python3 NLTKを実行する",
  posted_at: "2019-12-19",
  tags: [tagListWithKey["Alpine Linux"], tagListWithKey["NLTK"], tagListWithKey["Python"]],
  content: content
}

export default article
