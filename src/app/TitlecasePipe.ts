@Pipe({
    name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {
    transform(value: string): any {
        if (!value) return null;
        let words = value.split(' ');
        for (var i = 0; i < words.length; i++) {
            if (i > 0 && this.isPreposition(words[i]))
                words[i] = words[i].toLowerCase();
            else {
                words[i] = this.toTitleCase(words[i]);
            }
        }
        return words.join(' ');

    }

    private toTitleCase(word: string): string {
        return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase()
    }

    private isPreposition(word: string): boolean {
        let prepositions = [
            'of',
            'the'
        ];

        return prepositions.includes(word.toLowerCase())
    }
}
