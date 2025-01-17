import { Routes } from '@angular/router';

export const routes: Routes = [
  
    {
        path: '',
        loadComponent: () =>
        import(
            './views/home/home.component'
        ).then((mod) => mod.HomeComponent),
    },

    {
        path: 'courses',
        loadComponent: () =>
            import(
                './views/course/course.component'//pfad zum ordner
            ).then((mod) => mod.CourseComponent),
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'overview'
            },  
            {
                path: '',
                loadComponent: () =>
                import(
                    './views/course/course-overview/course-overview.component'
                ).then((mod) => mod.CourseOverviewComponent),

            },
            { 
                path: ':id/details', 
                loadComponent: () =>
                    import(
                        './views/course/course-detail/course-detail.component'
                    ).then((mod) => mod.CourseDetailComponent),
            },
        ]
    },

    {
        path: 'students',
        loadComponent: () =>
            import(
                './views/student/student.component'
            ).then((mod) => mod.StudentComponent),
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list'
            },  
            {
                path: 'list',
                loadComponent: () =>
                import(
                    './views/student/student-list/student-list.component'
                ).then((mod) => mod.StudentListComponent),

            },
            { 
                path: ':id/details', 
                loadComponent: () =>
                    import(
                        './views/student/student-detail/student-detail.component'
                    ).then((mod) => mod.StudentDetailComponent),
            },
        ]
    },

    
    
    {
        path: 'impressum',
        loadComponent: () =>
        import(
            './views/impressum/impressum.component'
        ).then((mod) => mod.ImpressumComponent),
        children: [
            { 
                path: 'error', 
                loadComponent: () =>
                    import(
                        '../lib/components/four-zero-four/four-zero-four.component'
                    ).then((mod) => mod.FourZeroFourComponent),
            
            }    
        ]
    },
    
    {
        path: '**',
        loadComponent: () =>
        import(
            '../lib/components/four-zero-four/four-zero-four.component'
        ).then((mod) => mod.FourZeroFourComponent),
  },
];
