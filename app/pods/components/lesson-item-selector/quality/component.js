import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: [ 'lesson-item-component', 'lesson-item-component--quality'],
  classNameBindings: ['isQualityOne:lesson-item-component--quality-one:lesson-item-component--quality-two'],

  qualityField: computed("isQualityOne", "lessonItem.{qualityOne,qualityTwo}", function() {
    return this.isQualityOne ? this.lessonItem.qualityOne : this.lessonItem.qualityTwo;
  }),

  errors: computed('qualityField', "lessonItem.{qualityOneErrors,qualityTwoErrors}", function() {
    return this.isQualityOne ? this.lessonItem.qualityOneErrors : this.lessonItem.qualityTwoErrors;
  }),

  isTouched: computed('errors', function() {
    return this.errors.length > 0;
  }),

  actions: {
    setQuality(value) {
      const fieldName = this.isQualityOne ? 'lessonItem.qualityOne' : 'lessonItem.qualityTwo';
      this.set(fieldName, value)
    }
  }
})