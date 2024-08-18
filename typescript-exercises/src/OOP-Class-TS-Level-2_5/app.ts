console.clear();

import Vocabulary from "./vocabulary";
import SpanishVocabulary from "./spanish-vocabulary";

const vocabulary = new Vocabulary([], "en");
vocabulary.displayAll();
vocabulary.addWord("date");
vocabulary.displayAll();
vocabulary.addWord("apple");
vocabulary.displayAll();
vocabulary.addWord("cat");
vocabulary.displayAll();

const spanishVocabulary = new SpanishVocabulary([]);
spanishVocabulary.addWord("dátil");
spanishVocabulary.displayAll();
spanishVocabulary.addWord("manzana");
spanishVocabulary.displayAll();
spanishVocabulary.addWord("gato");
spanishVocabulary.displayAll();
